
import { Router } from 'express';
import Joke from './models/Joke';
const router = Router();
import jokeController from './controllers/jokeController';


// GET /api/v1/jokes/random - une blague aléatoire
router.get('/jokes/random', jokeController.readRandom);

// GET /api/v1/jokes/:id - blague par id
router.get('/jokes/:id', jokeController.readById);

// GET /api/v1/jokes - toutes les blagues
router.get('/jokes', async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.post('/jokes', jokeController.add);
export default router;
