
import { Router } from 'express';
const router = Router();
import jokeController from './controllers/jokeController';



router.get('/jokes/random', jokeController.readRandom);

router.get('/jokes/count', jokeController.readCount);

router.get('/jokes', jokeController.browse);

//remember to define dynamic routes after static routes
router.get('/jokes/:id', jokeController.readById);

router.post('/jokes', jokeController.add);

export default router;
