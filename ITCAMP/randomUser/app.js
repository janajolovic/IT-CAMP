function createCard(name, email, phone, image) {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const Name = document.createElement("p");
    const Email = document.createElement("p");
    const Phone = document.createElement("p");
    const Image = document.createElement("img");
    Name.innerHTML = `Name: ${name}`;
    Email.innerHTML = `Email: ${email}`;
    Phone.innerHTML = `Phone: ${phone}`;
    Image.src = image;
    card.classList.add("card");
    container.appendChild(card);
    card.appendChild(Image)
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
        const image = response.results[0].picture.large;
        createCard(name, email, phone, image);
    } 
}

getData()