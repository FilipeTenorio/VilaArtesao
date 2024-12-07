const ArtesaoModel = require('../models/artesaoModel');

module.exports = {
    // Recuperar todos os artesãos
    getArtesaos: async (req, res) => {
        try {
            const result = await ArtesaoModel.find({});
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: "Não foi possível recuperar os artesãos.", error: err.message });
        }
    },

    // Recuperar um artesão pelo ID
    getArtesaoById: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await ArtesaoModel.findById(id);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Artesão não encontrado." });
            }
        } catch (err) {
            res.status(500).json({ message: "Não foi possível recuperar o artesão.", error: err.message });
        }
    },

    // Criar um novo artesão
    createArtesao: async (req, res) => {
        const { categoria, nome, telefone, descricao, image, redesocial, loja } = req.body;

        // Validar campos obrigatórios
        if (!categoria || !nome || !telefone || !redesocial || !loja) {
            return res.status(400).json({ error: 'Os campos categoria, nome, telefone e redesocial são obrigatórios!' });
        }

        try {
            const novoArtesao = new ArtesaoModel({
                categoria,
                nome,
                telefone,
                descricao,
                image, // Se image não for fornecida, será null
                redesocial,
                loja,
            });

            await novoArtesao.save();
            res.status(201).json(novoArtesao);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao criar o artesão: ' + err.message });
        }
    },

    // Atualizar um artesão
    updateArtesao: async (req, res) => {
        const { id } = req.params;
        const { categoria, nome, telefone, descricao, image, redesocial } = req.body;

        try {
            const artesaoAtualizado = await ArtesaoModel.findByIdAndUpdate(
                id,
                { categoria, nome, telefone, descricao, image, redesocial },
                { new: true } // Retorna o documento atualizado
            );

            if (!artesaoAtualizado) {
                return res.status(404).json({ message: 'Artesão não encontrado.' });
            }

            res.status(200).json(artesaoAtualizado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar o artesão: ' + err.message });
        }
    },

    // Excluir um artesão
    deleteArtesao: async (req, res) => {
        const { id } = req.params;

        try {
            const artesaoDeletado = await ArtesaoModel.findByIdAndDelete(id);

            if (!artesaoDeletado) {
                return res.status(404).json({ message: 'Artesão não encontrado.' });
            }

            res.status(200).json({ message: 'Artesão deletado com sucesso!' });
        } catch (err) {
            res.status(500).json({ error: 'Erro ao deletar o artesão: ' + err.message });
        }
    },
};
