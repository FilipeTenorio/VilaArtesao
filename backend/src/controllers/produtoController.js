// src/controllers/produtoController.js
const ProdutoModel = require('../models/produtoModel');

module.exports = {
    // Recuperar todos os produtos
    getProdutos: (req, res) => {
        ProdutoModel.find({})
            .populate('artesao', 'nome') 
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar os produtos." });
            });
    },

    getProdutosByCategoria: (req, res) => {
        const categoria = req.query.categoria;
        ProdutoModel.find({ categoria: categoria })
            .populate('artesao', 'nome')  
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: `Não foi possível recuperar os produtos da categoria ${categoria}.` });
            });
    },

    // Recuperar um produto pelo ID, incluindo informações sobre o(s) artesão(ões)
    getProdutoById: (req, res) => {
        const { id } = req.params;
        ProdutoModel.findById(id)
            .populate('artesao', 'nome biografia') 
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Produto não encontrado." });
                }
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar o produto." });
            });
    },

    // Filtrar produtos por faixa de preço ou outros critérios
    filtrarProdutos: (req, res) => {
        const { categoria } = req.query;
        
        const filtro = {};
        if (categoria) {
            filtro.categoria = categoria;
        }
    
        ProdutoModel.find(filtro)
            .populate('artesao', 'nome')  // Popula o nome dos artesãos relacionados
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível aplicar o filtro nos produtos." });
            });
    },

    // Método para criar um novo produto
    createProduto: async (req, res) => {
        const { categoria, nome, id, descricao, image, contato, artesao } = req.body;

        // Validar se todos os campos necessários estão presentes
        if (!categoria || !nome || !id || !descricao || !image || !contato || !artesao) {
            return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos!' });
        }

        try {
            const novoProduto = new ProdutoModel({
                categoria,
                nome,
                id,
                descricao,
                image,
                contato,
                artesao // Este deve ser um array de ObjectId
            });

            await novoProduto.save(); // Salvar o produto no banco de dados

            res.status(201).json(novoProduto); // Retornar o produto criado
        } catch (err) {
            res.status(500).json({ error: 'Erro ao criar o produto: ' + err.message });
        }
    }
};
