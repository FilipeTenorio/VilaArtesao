const ArtesaoModel = require('../models/artesaoModel');

module.exports = {
    // Recuperar todos os artesãos
    getArtesaos: (req, res) => {
        ArtesaoModel.find({})
            .populate('produto', 'nome')  // Popula os produtos com seus nomes
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar os artesãos." });
            });
    },

    // Recuperar um artesão pelo ID (mostrar biografia e outros detalhes)
    getArtesaoById: (req, res) => {
        const { id } = req.params;
        ArtesaoModel.findById(id)
            .populate('produto', 'nome descricao')  // Popula os produtos com nome e descrição
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Artesão não encontrado." });
                }
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar o artesão." });
            });
    },

    // Método para criar um novo artesão
    createArtesao: async (req, res) => {
        const { categoria, nome, telefone, descricao, image, redesocial } = req.body;

        // Validar se todos os campos necessários estão presentes
        if (!categoria || !nome || !telefone || !redesocial) {
            return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos!' });
        }

        try {
            const novoArtesao = new ArtesaoModel({
                categoria,
                nome,
                telefone,
                descricao,
                image,
                redesocial
            });

            await novoArtesao.save(); // Salvar o artesão no banco de dados

            res.status(201).json(novoArtesao); // Retornar o artesão criado
        } catch (err) {
            res.status(500).json({ error: 'Erro ao criar o artesão: ' + err.message });
        }
    }
};
