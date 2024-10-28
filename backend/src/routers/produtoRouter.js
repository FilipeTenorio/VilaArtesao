const express = require('express');
const produtoRouter = express.Router();
const produtoControllers = require('../controllers/produtoController');

// Rota para recuperar todos os produtos
produtoRouter.route('/produtos')
    .get((req, res) => {
        produtoControllers.getProdutos(req, res);
    })
    .post((req, res) => {
        produtoControllers.createProduto(req, res);
    });

// Rota para recuperar produtos por categoria
produtoRouter.route('/produtos/categoria')
    .get((req, res) => {
        produtoControllers.getProdutosByCategoria(req, res);
    });

// Rota para recuperar um produto pelo ID
produtoRouter.route('/produtos/:id')
    .get((req, res) => {
        produtoControllers.getProdutoById(req, res);
    });

// Rota para filtrar produtos
produtoRouter.route('/produtos/filtrar')
    .get((req, res) => {
        produtoControllers.filtrarProdutos(req, res);
    });

module.exports = produtoRouter;
