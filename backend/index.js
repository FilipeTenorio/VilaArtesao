// Imports
require('dotenv').config();
require('jsonwebtoken');

// Import express
const express = require('express');

// Atribuindo express a nossa variável app.
const app = express();

// Credenciais (se você não estiver usando autenticação, pode remover dbUser e dbPass)
const port = process.env.PORT;

// Import mongoose.
const mongoose = require('mongoose');

// Usando o middleware CORS
const cors = require('cors');
app.use(cors());

// Definindo o método de comunicação do express como JSON.
app.use(express.json());

// Passando o roteador do usuario.
const produtoRouter = require('./src/routers/produtoRouter');
const artesaoRouter = require('./src/routers/artesaoRouter');
const eventoRouter = require('./src/routers/eventoRouter');
const chaleRouter = require('./src/routers/chaleRouter');

// Usando as rotas
app.use('/api', produtoRouter);
app.use('/api', artesaoRouter);
app.use('/api', eventoRouter);
app.use('/api', chaleRouter);

// Conectando ao MongoDB local e iniciando o servidor
mongoose
    .connect('mongodb://localhost:27017/artesao') // Substitua 'nome_do_banco' pelo nome desejado
    .then(() => {
        app.listen(port || 8080, () => {
            console.log(`Servidor rodando na porta ${port || 8080}`);
        });
        console.log('Conectou com o banco local!');
    })
    .catch((err) => console.log('Erro ao conectar ao banco:', err));
