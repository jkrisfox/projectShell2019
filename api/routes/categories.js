import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';
import ToDo from '../entities/todo'

const router = Router();
router.route('/categories')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.user.categories);
    /*
    getRepository(Category)
    .find()
    .then((found) => {
      res.send(found);
    });
    */
  })
  .post((req, res) => {
    const { user, name } = req.body;
    const manager = getManager();
    const todo = manager.create(Category, { done, title });
    todo.user = req.user;
    todo.category = category;
    manager.save(todo).then((savedTodo) => {
      res.send(savedTodo);
    });
  });
router.route('/categories/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Category).findOneOrFail(
      { where: { id: req.params.id, user: req.user } },
    ).then((_foundCategory) => {
      req.category = _foundCategory;
      next();
    }, () => {
      res.send(404);
    });
  })
  .get((req, res) => {
    res.send(req.category);
  });
export default router;
