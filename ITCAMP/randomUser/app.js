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
        response = response.results[0];
        const name = response.name.first + ' ' + response.name.last
        const email = response.email;
        const phone = response.phone;
        const image = response.picture.large;
        createCard(name, email, phone, image);
    } 
}

getData()