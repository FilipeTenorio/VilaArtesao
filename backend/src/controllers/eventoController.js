const EventoModel = require('../models/eventoModel');

module.exports = {
    // Recuperar todos os eventos
    getEventos: (req, res) => {
        EventoModel.find({})
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar os eventos." });
            });
    },

    // Recuperar um evento pelo ID
    getEventoById: (req, res) => {
        const { id } = req.params;
        EventoModel.findById(id)
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Evento não encontrado." });
                }
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar o evento." });
            });
    }
};
