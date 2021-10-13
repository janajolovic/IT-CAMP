function createCard(name, email, phone) {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const Name = document.createElement("p");
    const Email = document.createElement("p");
    const Phone = document.createElement("p");
    Name.innerHTML = `Name: ${name}`;
    Email.innerHTML = `Email: ${email}`;
    Phone.innerHTML = `Phone: ${phone}`;
    card.classList.add("card");
    container.appendChild(card);
    card.appendChild(Name);
    card.appendChild(Email);
    card.appendChild(Phone);
}

async function getData() {
    let response = await fetch(`https://randomuser.me/api`)
    if (response.status === 200) {
        response = await response.json();
        const name = response.results[0].name.first + ' ' + response.results[0].name.last
        const email = response.results[0].email;
        const phone = response.results[0].phone;
        createCard(name, email, phone);
    } 
}

getData()