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

async function showUsers() {
    let jsonFromLS = JSON.parse(localStorage.getItem('users'));
    let usersSection = document.getElementById('cardusers');
    let cardsHTML = ''; 
    jsonFromLS.forEach(element => {
        let card = `
        <div class="card">
            ${element.name}
            ${element.phone}
        </div>`;
        cardsHTML += card;
    });
    usersSection.innerHTML = cardsHTML;
}


let getUsersBtn = document.getElementById('getusers');
getUsersBtn.addEventListener('click', function() {
        getUsers().then(showUsers());      
    });


