import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import ToDo from '../entities/todo';

const router = Router();
router.route('/todos')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(ToDo).find({ where: { userId: req.user.id }, relations: ['cat'] }).then((todos) => {
      res.send(todos);
    });
  })
  .post((req, res) => {
    const { done, title, cat } = req.body;
    const manager = getManager();
    const todo = manager.create(ToDo, { done, title, cat });
    todo.user = req.user;
    manager.save(todo).then((savedTodo) => {
      getRepository(ToDo).findOneOrFail({ where: { id: savedTodo.id }, relations: ['cat'] }).then((_foundTodo) => {
        res.send(_foundTodo);
      });
    });
  });
router.route('/todos/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(ToDo).findOneOrFail(
      { where: { userId: req.user.id, id: req.params.id }, relations: ['cat'] },
    ).then((_foundTodo) => {
      req.todo = _foundTodo;
      next();
    }, () => {
      res.send(404);
    });
  })
  .put((req, res) => {
    const foundTodo = req.todo;
    const { title, done } = req.body;
    foundTodo.title = title;
    foundTodo.done = done;
    getManager().save(foundTodo).then((updatedTodo) => {
      res.send(updatedTodo);
    });
  })
  .get((req, res) => {
    res.send(req.todo);
  })
  .delete((req, res) => {
    getManager().delete(ToDo, req.todo.id).then(() => {
      res.send(200);
    });
  });

export default router;
