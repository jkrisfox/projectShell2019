import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/categories')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Category).find({ where: { user: req.user.id }}).then((categories) => {
      res.send(categories);
    });
  });
  

export default router;
