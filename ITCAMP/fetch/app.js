const limit = 12;
resData = null;
let page = 1;
const pages = document.querySelector(".pagination");
const link = `https://catfact.ninja/facts?page=${page}&limit=${limit}`;


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
    let response = await fetch(link)
    if (response.status === 200) {
        response = await response.json();
        console.log(response)
        response.data.forEach(element => createCard(element.fact))

        const pg_num = response.current_page;
        const last_page = response.last_page;

        // pagination(pg_num, last_page)
    } 
}


// function pagination(page_num, last_page) {
//     for (let i = 1; i <= last_page; i++) {
//         const pg_num = document.createElement("a")
//         pg_num.innerHTML = i;
//         pages.appendChild(pg_num);
//     }
// }


getData()



