const usersForm = document.querySelector('#search-users');
const search = document.querySelector('#serialnumber');

const mana = document.querySelector('#mana');
const userOne = document.querySelector('#user-1');
const userTwo = document.querySelector('#user-2');
const userThree = document.querySelector('#user-3');
const userFour = document.querySelector('#user-4');
const userFive = document.querySelector('#user-5');

usersForm.addEventListener('click', (e) => {
    e.preventDefault()
    const serialNumber = parseInt(search.value);

    mana.textContent = '';
    userOne.textContent = '';
    userTwo.textContent = '';
    userThree.textContent = '';
    userFour.textContent = '';
    userFive.textContent = '';

    fetch('/db?num=' + serialNumber).then((response) => {
        response.json().then((data) => {
            mana.textContent = data.msg.mana
            userOne.textContent = data.msg.userOne
            userTwo.textContent = data.msg.userTwo
            userThree.textContent = data.msg.userThree
            userFour.textContent = data.msg.userFour
            userFive.textContent = data.msg.userFive
        })
    })
});