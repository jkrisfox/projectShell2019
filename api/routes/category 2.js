import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Category).find().then((thisCategory) => {
      res.send(thisCategory);
    });
  })

export default router;