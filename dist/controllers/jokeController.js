"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joke_1 = __importDefault(require("../models/Joke"));
const browse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jokes = yield Joke_1.default.findAll();
        res.json(jokes);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
        next(error);
    }
});
const readRandom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jokes = yield Joke_1.default.findAll();
        const randomIndex = Math.floor(Math.random() * jokes.length);
        res.json(jokes[randomIndex]);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
        next(error);
    }
});
const readById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const joke = yield Joke_1.default.findByPk(req.params.id);
        if (!joke)
            res.status(404).json({ message: 'Blague non trouvée' });
        res.json(joke);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
        next(error);
    }
});
const readCount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield Joke_1.default.count();
        res.json({ count });
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
        next(error);
    }
});
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answer } = req.body;
    if (!question || !answer) {
        res.status(400).json({ message: 'Les champs question et answer sont requis.' });
    }
    try {
        const newJoke = yield Joke_1.default.create({ question, answer });
        res.status(201).json(newJoke);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la blague.' });
        next(error);
    }
});
exports.default = {
    browse,
    add,
    readCount,
    readRandom,
    readById
};
