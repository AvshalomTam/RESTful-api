const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    serialnumber: {
        type: Number
    },
    username: {
        type: String
    },
    date: {
        type: String
    },
    telephone: {
        type: String
    }
});

const Order = mongoose.model('Order', userSchema);

module.exports = Order;