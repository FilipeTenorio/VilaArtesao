const express = require('express');
const router = express.Router();
const chaleController = require('../controllers/chaleController'); // Importa o controller de chalés

// Rota para listar todos os chalés
router.get('/chales', chaleController.listarChales);

// Rota para mostrar detalhes de um chalé específico
router.get('/chales/:id', chaleController.mostrarChale);

module.exports = router;
