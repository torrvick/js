async function getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url)
    if (response.ok) {
        let jsonFromAPI = await response.json();
        localStorage.setItem('users', JSON.stringify(jsonFromAPI));
    } else {
        console.log("Something went wrong");
    }
}

// async function showUsers() {
//     let jsonFromLS = JSON.parse(localStorage.getItem('users'));
//     let usersSection = document.getElementById('userscard');
//     let cardsHTML = ''; 
//     // console.log(jsonFromLS);
//     jsonFromLS.forEach(element => {
//         let card = `
//         <div class="card">
//             <b>${element.name}</b>
//             ${element.phone}<br>
//             ${element.email}
//             <hr>
//         </div>`;
//         cardsHTML += card ;
//     });
//     usersSection.innerHTML = cardsHTML;
// }

async function showUsers() {
    let jsonFromLS = JSON.parse(localStorage.getItem('users'));
    let usersSection = document.getElementById('userscard');
    let cardsHTML = '<table>'; 
    // console.log(jsonFromLS);
    jsonFromLS.forEach(element => {
        let card = `
        <tr>
            <td class="username">
            <b>${element.name}</b><br>
            <i>aka</i>
            ${element.username}
            </td>
            <td class="userinfo">
            ${element.phone}<br>
            <a href="mailto:${element.email}">
            ${element.email}</a>
            </td>
            
        </tr>`;
        cardsHTML += card ;
    });
    cardsHTML += "</table>"
    usersSection.innerHTML = cardsHTML;
}

let getUsersBtn = document.getElementById('getusers');
getUsersBtn.addEventListener('click', async function() {
        await getUsers();
        showUsers(); 
        let inputForm = document.getElementById('adduser');
        inputForm.classList.remove('hidden');
    });


async function addUser(event) {
    event.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users";
    let name = document.getElementsByTagName('input')[0].value;
    let login = document.getElementsByTagName('input')[1].value;
    let phone = document.getElementsByTagName('input')[2].value;
    let email = document.getElementsByTagName('input')[3].value;
    let sendString = {
        name: name,
        username: login,
        email: email,
        phone: phone
    }; 
    let response = await fetch(url, 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendString)
        });
    if (response.status >= 200 && response.status <= 299) {
    let jsonFromLS = localStorage.getItem('users');
    jsonFromLS = JSON.parse(jsonFromLS);
    jsonFromLS.push(sendString);
    localStorage.setItem('users', JSON.stringify(jsonFromLS));
    showUsers();
    } else {
        alert("Произошла ошибка")
        console.log(response);
    }
    let inputs = userForm.getElementsByClassName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value ='';
    }


}

let userForm = document.getElementById('form');
userForm.addEventListener('submit', addUser);

