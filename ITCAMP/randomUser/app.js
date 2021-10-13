function createCard(text) {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = text;
    card.classList.add("card");
    container.appendChild(card);
    card.appendChild(title);
    console.log(title)
}

async function getData() {
    let response = await fetch(`https://randomuser.me/api`)
    if (response.status === 200) {
        response = await response.json();
        console.log(response.results[0].name.first)
        createCard(response.results[0].name.first)
    } 
}

getData()