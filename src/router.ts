
import { Router } from 'express';
const router = Router();
import jokeController from './controllers/jokeController';



router.get('/jokes/random', jokeController.readRandom);

router.get('/jokes/count', jokeController.readCount);

router.get('/jokes', jokeController.browse);

//remember to define dynamic routes after static routes
router.get('/jokes/:id', jokeController.readById);

router.post('/jokes', jokeController.add);

// Swagger documentation for the jokes routes
/**
 * @openapi
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the joke
 *           example: 1
 *         question:
 *           type: string
 *           description: The joke question
 *           example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *         answer:
 *           type: string
 *           description: The joke answer
 *           example: "Parce que sinon ils tombent dans le bateau."
 * 
 *     JokeInput:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         question:
 *           type: string
 *           description: The joke question
 *           example: "Une question drôle"
 *         answer:
 *           type: string
 *           description: The joke answer
 *           example: "Une réponse drôle"
 *
 * /api/jokes:
 *   get:
 *     summary: Retrieve a list of all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: List of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *
 *   post:
 *     summary: Add a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JokeInput'
 *     responses:
 *       201:
 *         description: Joke created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Missing question or answer
 *       500:
 *         description: Server error
 *
 * /api/jokes/random:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Server error
 *
 * /api/jokes/count:
 *   get:
 *     summary: Get total number of jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Number of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 42
 *       500:
 *         description: Server error
 *
 * /api/jokes/{id}:
 *   get:
 *     summary: Get a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the joke to get
 *     responses:
 *       200:
 *         description: Joke found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Joke not found
 *       500:
 *         description: Server error
 */


export default router;
