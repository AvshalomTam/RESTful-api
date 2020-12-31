
const checkValidMsg = function (mana='', userOne='' , userTwo='' , userThree='' , userFour='' , userFive='' ) {
    return {
        mana: 'The Mana is: ' + mana,
        userOne,
        userTwo,
        userThree,
        userFour,
        userFive
    }
} 

const orderMessage = (msg) => {
    return {
        mana: msg.mana,
        userOne: msg.userOne ? msg.userOne.username : '',
        userTwo: msg.userTwo ? msg.userTwo.username : '',
        userThree: msg.userThree ? msg.userThree.username : '',
        userFour: msg.userFour ? msg.userFour.username : '',
        userFive: msg.userFive ? msg.userFive.username : ''
    }
}

module.exports = {
    checkValidMsg,
    orderMessage
}