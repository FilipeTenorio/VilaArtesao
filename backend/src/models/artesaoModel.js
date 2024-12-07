const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artesaoSchema = new Schema({
    categoria: { type: String, required: true }, // Ex.: "Artesanato Têxtil"
    nome: { type: String, required: true },      // Ex.: "Adriana Elisabete Meira França"
    loja: {type: String},
    telefone: { type: String }, // Ex.: "(99) 8434-725"
    descricao: {                                // Descrição opcional
        type: String,
        required: false,
    },
    image: { type: String, required: false },   // Ex.: URL de imagem ou vazio se não tiver
    redesocial: {                               // Redes sociais do artesão
        type: [String],                         // Ex.: ["@amacg_", "https://instagram.com/amacg_"]
        required: false,
    },
    artesao: { 
        type: Schema.Types.ObjectId,            // Vinculação com outro modelo, se necessário
        ref: 'Artesao', 
        required: false,                        // Tornado opcional
    },
});

// Exportar o modelo para utilização
module.exports = mongoose.model('Artesao', artesaoSchema);
