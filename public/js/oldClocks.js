// const socket = io()
const $retrieveButton = document.querySelector('#retrieve')
const $saveDBWaterButton = document.querySelector('#save-to-db-water')
const $saveDBElecButton = document.querySelector('#save-to-db-elec')

const monthPickRet = document.querySelector('#monthPickRet')
const yearPickRet = document.querySelector('#yearPickRet')
const kindRet = document.querySelector('#kindRet')

const monthPickWater = document.querySelector('#monthPickWater')
const yearPickWater = document.querySelector('#yearPickWater')

const monthPickElec = document.querySelector('#monthPickElec')
const yearPickElec = document.querySelector('#yearPickElec')

const messageDB = document.querySelector('#oldClocks')
const messageDBWater = document.querySelector('#messageDBWater')
const messageDBElec = document.querySelector('#messageDBElec')

//values inserted by user
const waterToDB = document.querySelector('#water-toDB')
const elecToDB = document.querySelector('#elec-toDB')


$saveDBWaterButton.addEventListener('click', (e) => {
    e.preventDefault()
    const fetchSavePath = `/save?kind=Water&year=${yearPickWater.value}&month=${monthPickWater.value}&clock=${waterToDB.value}`
    fetchToServer(fetchSavePath, messageDBWater)
})

$saveDBElecButton.addEventListener('click', (e) => {
    e.preventDefault()
    const fetchSavePath = `/save?kind=Electricity&year=${yearPickElec.value}&month=${monthPickElec.value}&clock=${elecToDB.value}`
    fetchToServer(fetchSavePath, messageDBElec)
})

const fetchToServer = (fetchPath, messagePlace) => {
    fetch(fetchPath).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messagePlace.textContent = data.error
            } else {
                messagePlace.textContent = data.message
            }
        })
    })
}

$retrieveButton.addEventListener('click', (e) => {
    e.preventDefault()
    const kind = kindRet.value
    const year = yearPickRet.value
    const month = monthPickRet.value

    const fetchPath = `/clocks?kind=${kind}&year=${year}&month=${month}`
    fetchToServer(fetchPath, messageDB)
    // fetch(fetchPath).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             messageDB.textContent = data.error
    //         } else {
    //             messageDB.textContent = data
    //         }  
    //     })
    // })
})