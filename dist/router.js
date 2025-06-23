"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const jokeController_1 = __importDefault(require("./controllers/jokeController"));
router.get('/jokes/random', jokeController_1.default.readRandom);
router.get('/jokes/count', jokeController_1.default.readCount);
router.get('/jokes', jokeController_1.default.browse);
//remember to define dynamic routes after static routes
router.get('/jokes/:id', jokeController_1.default.readById);
router.post('/jokes', jokeController_1.default.add);
exports.default = router;
