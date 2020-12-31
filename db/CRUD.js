// CRUD - Create Read Update Delete

const Order = require('../app/models/order');
// Create DATA
const createOrder = (restaurant=1, username='', date='', food='') => {
    const b = new Order({
        restaurant,
        username,
        date,
        food
    })
    
    b.save().then(() => {
        console.log(b)
    }).catch((error) => {
        console.log('error!', error)
    })
}
const fetchByRestaurant = (num) => {
    const findResult = await orders.find({
        username: "a1"
      });
    console.log(order);
}

module.exports = {
    createOrder,
    fetchByRestaurant
}