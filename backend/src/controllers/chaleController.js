const Chale = require('../models/chaleModel'); // Importa o model Chale


// Controller para manipular os chalés
const chaleController = {
    // Função para listar todos os chalés
    listarChales: async (req, res) => {
        try {
            // Encontra todos os chalés
            const chales = await Chale.find().populate('artesao', 'nome'); // Popula o campo artesão com o nome do artesão
            res.status(200).json(chales); // Retorna os chalés como JSON
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar chalés", error });
        }
    },

    // Função para mostrar os detalhes de um chalé específico
    mostrarChale: async (req, res) => {
        try {
            const { id } = req.params; // Pega o ID do chalé pela URL
            // Busca o chalé pelo ID e popula os artesãos
            const chale = await Chale.findById(id).populate('artesao', 'nome biografia telefone');
            if (!chale) {
                return res.status(404).json({ message: "Chalé não encontrado" });
            }
            res.status(200).json(chale); // Retorna o chalé encontrado como JSON
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar o chalé", error });
        }
    }
};

module.exports = chaleController;
