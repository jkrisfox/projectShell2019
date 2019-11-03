import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/category')
    .all(isAuthenticated)
    .get((req, res) => {
        getRepository(Category).find({
            where: { user : req.user.id }
        })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.status(404).send(err);
        });
    })
    .post((req, res) => {
        const { name } = req.body;
        const manager = getManager();
        const category = manager.create(Category, { 
            name
        });
        category.user = req.user;
        manager.save(category).then(item => {
            res.send(item);
        })
        .catch(err => {
            res.status(400).send(err);
        });
    });
/*
router.route('/todos/:id')
    .all(isAuthenticated)
    .get((req, res) => {
        get
    })

*/
export default router;