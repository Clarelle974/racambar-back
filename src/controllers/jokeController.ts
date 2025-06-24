import type { RequestHandler } from "express";
import Joke from '../models/Joke';


const browse: RequestHandler=async (req, res, next) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
    next(error)
  }
};
const readRandom: RequestHandler=async (req, res, next) => {
  try {
    const jokes = await Joke.findAll();
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
     next(error)
  }
};

const readById: RequestHandler=async (req, res, next) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke)  return res.status(404).json({ message: 'Blague non trouvée' });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
     next(error)
  }
};

const readCount: RequestHandler=async (req, res, next) => {
  try {
    const count = await Joke.count();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
     next(error)
  }
};

const add: RequestHandler=async (req, res, next) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    res.status(400).json({ message: 'Les champs question et answer sont requis.' });
  }

  try {
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la blague.' });
    next(error)
  }
};

export default {
  browse,
  add, 
  readCount,
  readRandom,
  readById
};
