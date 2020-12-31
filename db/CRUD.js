// CRUD - Create Read Update Delete
const Order = require('../app/models/order');
// Create DATA
const createOrder = (serialnumber=0, username='', date='', telephone='') => {
    const order = new Order({
        serialnumber,
        username,
        date,
        telephone
    })
    
    order.save().then(() => {
        // console.log(order)
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createOrder
}