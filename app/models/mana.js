const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    serialnumber: {
        type: Number
    },
    times: {
        type: Number
    }
});

const Mana = mongoose.model('Mana', userSchema);

module.exports = Mana;