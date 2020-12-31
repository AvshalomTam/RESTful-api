const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    restaurant: {
        type: Number
    },
    username: {
        type: String
    },
    date: {
        type: String
    },
    food: {
        type: String
    }
});

const Order = mongoose.model('Order', userSchema);

module.exports = Order;