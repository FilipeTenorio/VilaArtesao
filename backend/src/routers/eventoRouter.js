
const express = require('express');
const eventoRouter = express.Router()
const eventoController = require('../controllers/eventoController')
const app = express();

app.use(express.json());




module.exports = eventoRouter;
