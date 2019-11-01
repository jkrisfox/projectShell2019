import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';


const router = Router();
router.route('/categories')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Category).find({ where: { userId: req.user.id }, relations: ['todos'] }).then((category) => {
      res.send(category);
    });
  })
  .post((req, res) => {
    const { title } = req.body;
    const manager = getManager();
    const category = manager.create(Category, { title });
    category.title = title;
    category.user = req.user;
    getRepository(Category).findOneOrFail(
      { where: { userId: category.user, title: category.title } }
    ).then(
      () => {
        res.sendStatus(400).send({ msg: "Category already exists" });
      }, 
      () => {
        manager.save(category).then((savedCategory) => {
          res.send(savedCategory);
        });
      }
    );
  });

export default router;
