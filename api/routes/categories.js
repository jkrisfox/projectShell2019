import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Cat from '../entities/cat';

const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Cat).find({ where: { user: req.user.id } }).then((cats) => {
      res.send(cats);
    });
  })
  .post((req, res) => {
    const { name } = req.body;
    const manager = getManager();
    const cat = manager.create(Cat, { name });
    cat.user = req.user;
    manager.save(cat).then((savedCat) => {
      res.send(savedCat);
    });
  });
router.route('/category/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Cat).findOneOrFail(
      { where: { user: req.user.id, id: req.params.id } },
    ).then((_foundCat) => {
      req.cat = _foundCat;
      next();
    }, () => {
      res.send(404);
    });
  })
  .get((req, res) => {
    res.send(req.cat);
  });

export default router;
