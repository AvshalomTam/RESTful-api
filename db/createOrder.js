const Order = require('../app/models/order');

const createOrder = (serialnumber=0, username='', date='', telephone='') => {
    const order = new Order({
        serialnumber,
        username,
        date,
        telephone
    })
    
    order.save().then(() => {
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createOrder
}