const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artesaoSchema = new Schema({
    categoria: { type: String, required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    descricao: { type: String, required: false },
    image: { type: String, required: false },
    redesocial: { type: String, required: true },
    // Produto vinculado a um ou mais artesãos
    artesao: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Artesao',
        required: true
    }]
});

module.exports = mongoose.model('Artesao', artesaoSchema);