import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import ToDo from '../entities/todo';
import Category from '../entities/category';

const router = Router();
router.route('/todos')
    .all(isAuthenticated)
    .get((req, res) => {
        res.send(req.user.todos);
    })
    .post((req, res) => {
        const { done, title } = req.body;
        const manager = getManager();
        const todo = manager.create(ToDo, { done, title });
        todo.user = req.user;
        manager.save(todo).then((savedTodo) => {
            res.send(savedTodo);
        });
    });
router.route('/todos/:id')
    .all(isAuthenticated)
    .all((req, res, next) => {
        getRepository(ToDo).findOneOrFail({ where: { userId: req.user.id, id: req.params.id } }, ).then((_foundTodo) => {
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

router.route('/categories')
    .all(isAuthenticated)
    .get((req, res) => {
        const repo = getRepository(Category);
        var resp = repo.find({ where: { userId: req.user.id } }).then((data) => {
            res.send(data)
        });
    })
    .post((req, res) => {
        const { title } = req.body;
        const manager = getManager();
        const cat = manager.create(Category, { title });
        cat.user = req.user;
        manager.save(cat).then((savedCat) => {
            res.send(savedCat);
        });
    });
// router.route('/categories/:id')
//     .all(isAuthenticated)
//     .all((req, res, next) => {
//         getRepository(Category).findOneOrFail({ where: { categoryId: req.category.id, id: req.params.id } }, ).then((_foundTodo) => {
//             req.category = _foundCategory;
//             next();
//         }, () => {
//             res.send(404);
//         });
//     })
//     .put((req, res) => {
//         const _foundCategory = req.category;
//         const { title } = req.body;
//         foundCategory.title = title;
//         getManager().save(foundCategory).then((updatedCategory) => {
//             res.send(updatedCategory);
//         });
//     })
//     .get((req, res) => {
//         res.send(req.category);
//     })
//     .delete((req, res) => {
//         getManager().delete(Category, req.category.id).then(() => {
//             res.send(200);
//         });
//     });
export default router;