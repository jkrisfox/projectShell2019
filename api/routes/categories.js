import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import ToDo from '../entities/todo';
import Categories from '../entities/categories';

const router = Router();

router.route('/categories')
  .all(isAuthenticated)
  .get((req, res) => {
  	getRepository(Categories).find().then((thisCategories) => {
      res.send(thisCategories);
  	});
  })

export default router;
