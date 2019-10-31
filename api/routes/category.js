import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.user.category);
  })
  .post((req, res) => {
    const { Name } = req.body;
    const manager = getManager();
    const category = manager.create(Category, {Name});
    category.user = req.user;
    manager.save(category).then((savedCategory) => {
      res.send(savedCategory);
    });
  });
router.route('/categories/:id')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Category).findOneOrFail(
      req.params.id,
    ).then((_foundCategory) => {
      res.send(_foundCategory);
    }, () => {
      res.send(404);
    });
  });

export default router;