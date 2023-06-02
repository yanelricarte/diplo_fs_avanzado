const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
        name: {
        type: String,
        required: true,
        },
        lastName: {
        type: String,
        required: true,
        },
        house: {
        type: String,
        required: true,
        },
        patronus: {
        type: String,
        required: true,
        },
        image: {
        type: String,
        required: true,
        },
    });
    
    const Character = mongoose.model('Character', characterSchema);
    
    module.exports = Character;
    