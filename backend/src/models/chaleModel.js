const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chaleSchema = new Schema({
    endereco: { type: String, required: true },
    artesao: { 
        type: Schema.Types.ObjectId, 
        ref: 'Artesao',
        required: true 
    },
    image: { type: String, required: false }
});

module.exports = mongoose.model('Chale', chaleSchema);
