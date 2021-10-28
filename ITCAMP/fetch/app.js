const limit = 12;
resData = null;
let page = 7;
const pages = document.querySelector(".pagination");
const link = `https://catfact.ninja/facts?page=${page}&limit=${limit}`;
const ul = document.querySelector("ul");

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

        pagination(pg_num, last_page)
    } 
}


function pagination(page, total) {
    let li = '';
    next_page = page+1;
    prev_page = page-1;

    if (page > 1) {
        li += `<li class="btn prev" onclick="pagination(${page-1}, ${total})">
                <span><i class="fas fa-angle-left"></i> prev</span></li>`;
    }

    if (page > 2) {
        li += `<li class="num"><span>1</span></li>`
        if (page > 3) {
            li += `<li class="dots"><span>...</span></li>`
        }
    }

    for (i = prev_page; i <= next_page; i++) {
        if (i === page) {
            li += `<li class="num active"><span>${i}</span></li>`
        } else li += `<li class="num"><span>${i}</span></li>`
    }
    
    if (page < total-1) {
        if (page < total - 2) {
            li += `<li class="dots"><span>...</span></li>`
        }
        li += `<li class="num"><span>${total}</span></li>`
    }
    if (page < total) {
        li += `<li class="btn next" onclick="pagination(${page+1}, ${total})"><span>next <i class="fas fa-angle-right"></i></span></li>`;
    }
    
    ul.innerHTML = li;
}


getData()


