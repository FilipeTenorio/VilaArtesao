const express = require('express');
const artesaoRouter = express.Router();
const artesaoControllers = require('../controllers/artesaoController');

artesaoRouter.route('/artesaos')
    .get((req, res) => {
        artesaoControllers.getArtesaos(req, res);
    });

artesaoRouter.route('/artesaos/:id')
    .get((req, res) => {
        artesaoControllers.getArtesaoById(req, res);
    });

artesaoRouter.route('/artesaos/create')
    .post((req, res) => {
        artesaoControllers.createArtesao(req,res);
    })

module.exports = artesaoRouter;
