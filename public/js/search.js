const usersForm = document.querySelector('#search-users');
const search = document.querySelector('#serialnumber');

usersForm.addEventListener('click', (e) => {
    e.preventDefault()
    const serialNumber = parseInt(search.value);

    // get mana name + users from db by serial number
    fetch('/db?num=' + serialNumber).then((response) => {
        response.json().then((data) => {
            var order, users_list = "";

            const mana = data.mana
            const orders_list = data.users;
            
            for (order in orders_list) {
                const name = orders_list[order].username
                const date = orders_list[order].date
                const order_txt = `${name} ordered ${mana} in ${date}`
                users_list += `${order_txt} <br>`
            };

            document.getElementById("mana").innerHTML = mana;
            document.getElementById("users_list").innerHTML = users_list;
        })
    })
});