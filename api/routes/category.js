import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import Category from '../entities/category';

const router = Router();
router.route('/category')
  .get((req, res) => {
    getRepository(Category).find({ where: { userId: req.user.id } }).then((categories) => {
      res.send(categories);
    });
  })

export default router;
