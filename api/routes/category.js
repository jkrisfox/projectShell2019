import { Router } from 'express';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/category')
.all(isAuthenticated)
.get((req, res) => {
  res.send(req.user.categories);
  })
  router.route('/category/:id')
  .all(isAuthenticated)
  .get((req, res, next) => {
    getRepository(Category).findOneOrFail(
      req.params.id,
    ).then((_foundCategory) => {
      req.category = _foundCategory;
      res.send(_foundCategory);
    }, () => {
      res.send(404);
    });
  });