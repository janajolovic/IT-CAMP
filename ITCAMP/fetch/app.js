
// async function createCard() {
//     fetch("https://catfact.ninja/fact")
//         .then((response) => response.json())
//         .then((data) => {
//             let fact = data.fact;
//             console.log(fact)
//             const fact_card = document.createElement("div");
//             fact_card.classList.add("fact-card");
//             fact_card.innerHTML = `<p>${fact}</p>`;
//             container.appendChild(fact_card); 
//         })
// }

// for (i=0; i <= limit; i++) {
//     createCard()
// }



const limit = 12;
resData = null;

function createCard(text) {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = text;
    card.classList.add("fact-card");
    container.appendChild(card);
    card.appendChild(title);
}

async function getData() {
    let response = await fetch(`https://catfact.ninja/facts?limit=${limit}`)
    if (response.status === 200) {
        response = await response.json();
        response.data.forEach(element => createCard(element.fact))
    } 
}

getData()