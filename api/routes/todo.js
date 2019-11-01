import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import ToDo from '../entities/todo';

const router = Router();
router.route('/todos')
  .all(isAuthenticated)
  .get((req, res) => {
      getRepository(ToDo).find({ where: { userId: req.user.id }, relations: ['category'] }).then((todo) => {
        res.send(todo);
    })
  })
  .post((req, res) => {
    const { done, title, category } = req.body;
    const manager = getManager();
    const todo = manager.create(ToDo, { done, title });
    todo.done = done;
    todo.title = title;
    todo.user = req.user;
    todo.category = category;
    manager.save(todo).then((savedTodo) => {
      res.send(savedTodo);
    });
  });

router.route('/todos/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(ToDo).findOneOrFail(
      { where: { userId: req.user.id, id: req.params.id } },
    ).then((_foundToDo) => {
      req.todo = _foundToDo;
      next();
    }, () => {
      res.sendStatus(404);
    });
  })
  .put((req, res) => {
    const foundTodo = req.todo;
    const { done } = req.body;
    foundTodo.done = done;

    getManager().save(foundTodo).then((updatedTodo) => {
      res.send(updatedTodo);
    });
  })
  .delete((req, res) => {
    getManager().delete(ToDo, req.todo.id).then(() => {
      res.sendStatus(200);
    });
  });

export default router;
