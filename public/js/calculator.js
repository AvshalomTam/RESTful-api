const socket = io()

const $waterOld = document.querySelector('#water-old')
const $waterNew = document.querySelector('#water-new')
const $calcWaterButton = document.querySelector('#calc-water')

const $elecOld = document.querySelector('#elec-old')
const $elecNew = document.querySelector('#elec-new')
const $calcElecButton = document.querySelector('#calc-elec')

const messageOneWater = document.querySelector('#waterUsage')
const messageTwoWater = document.querySelector('#waterPay')
const messageOneElec = document.querySelector('#ElecUsage')
const messageTwoElec = document.querySelector('#ElecPay')

const showMessagesWater = (subtraction, str, valShekels) => {
    messageOneWater.textContent = `You used: ${subtraction} ${str}`
    messageTwoWater.textContent = `You should pay ${valShekels} shekels`
}

const showMessagesElec = (subtraction, str, valShekels) => {
    messageOneElec.textContent = `You used: ${subtraction} ${str}`
    messageTwoElec.textContent = `You should pay ${valShekels} shekels`
}

const showTariffOnPage = (tariffWater, tariffElec) => {
    tariffWaterMsg.textContent = `calculating by ${tariffWater} shekels`
    tariffElecMsg.textContent = `calculating by ${tariffElec} agorot`
}

// bill calculation functions
const WaterCalculation = (sub) => {
    return (sub * WaterRate).toFixed(2)
}

const ElecCalculation = (sub) => {
    return ((sub * ElecrticityRate)/100).toFixed(2)
}

// Callback function for buttons
const CallbackForButton = ($oldValue, $newValue, calcShekels, showMessages, str) => {
    if ($oldValue.value.localeCompare('')==0 || $newValue.value.localeCompare('')==0) {
        return console.log('Must Enter all fields!')
    }
    const valOldClock = parseFloat($oldValue.value)
    const valNewClock = parseFloat($newValue.value)
    const subtraction = (valNewClock - valOldClock).toFixed(2)
    // calc bill
    const valShekels = calcShekels(subtraction)

    if (subtraction <= 0) {
        return console.log('replace old and new clocks please!')
    }
    showMessages(subtraction, str, valShekels)
}

$calcWaterButton.addEventListener('click', (e) => {
    e.preventDefault()
    const str = 'kubs of water'
    CallbackForButton($waterOld, $waterNew, WaterCalculation, showMessagesWater, str)
})

$calcElecButton.addEventListener('click', (e) => {
    e.preventDefault()
    const str = 'Kilowatt'
    CallbackForButton($elecOld, $elecNew, ElecCalculation, showMessagesElec, str)
})

socket.on('message', (message) => {
    console.log(message)
    // got tariffWaterMsg, tariffElecrMsg from server
    WaterRate = message.tariffWater
    ElecrticityRate = message.tariffElec
    showTariffOnPage(WaterRate, ElecrticityRate)
})