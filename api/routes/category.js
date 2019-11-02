import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import category from '../entities/category';

const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.user.category);
  })
  .post((req, res) => {
    const { done, title, kind} = req.body;
    const manager = getManager();
    const todo = manager.create(ToDo, {done, title, kind});
    todo.user = req.user;
    manager.save(todo).then((savedTodo) => {
      res.send(savedTodo);
    });
  });

  export default router;