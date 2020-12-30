const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

const Bear = mongoose.model('Bear', userSchema);

module.exports = Bear;


