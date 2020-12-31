// CRUD - Create Read Update Delete
const Mana = require('../app/models/mana');
// Create DATA

const createMana = (name='', serialnumber=0, times=0) => {
    const mana = new Mana({
        name,
        serialnumber,
        times
    })
    
    mana.save().then(() => {
        // console.log(mana)
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createMana
}