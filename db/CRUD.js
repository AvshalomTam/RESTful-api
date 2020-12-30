// CRUD - Create Read Update Delete

const Bear = require('../app/models/bear');

const createBear = (name = '') => {

    const b = new Bear({
        name
    })
    
    b.save().then(() => {
        console.log(b)
    }).catch((error) => {
        console.log('error!', error)
    })

}

module.exports = {
    createBear
}
