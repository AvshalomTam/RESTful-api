const Mana = require('../app/models/mana');

const createMana = (name='', serialnumber=0, times=0) => {
    const mana = new Mana({
        name,
        serialnumber,
        times
    })
    
    mana.save().then(() => {
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createMana
}