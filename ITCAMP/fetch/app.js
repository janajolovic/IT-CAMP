const limit = 12;
let page = 1;
const pages = document.querySelector(".pagination");
let container = document.querySelector(".container");
let link = `https://catfact.ninja/facts?page=${page}&limit=${limit}`;
const ul = document.querySelector("ul");
const btn = document.querySelector(".submit_btn");

function createCard(text) {
    let container = document.querySelector(".container");
    const card = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = text;
    card.classList.add("fact-card");
    container.appendChild(card);
    card.appendChild(title);
}

async function getData(link) {
    let response = await fetch(link)
    if (response.status === 200) {
        response = await response.json();
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
    link = `https://catfact.ninja/facts?page=${page}&limit=${limit}`;

    if (page > 1) {
        li += `<li class="btn prev" onclick="Clear(), pagination(${page-1}, ${total}), getData(link)">
                <span><i class="fas fa-angle-left"></i> prev</span></li>`;
    }

    if (page > 2) {
        li += `<li class="num" onclick="Clear(), pagination(1, ${total}), getData(link)"><span>1</span></li>`
        if (page > 3) {
            li += `<li class="dots"><span>...</span></li>`
        }
    }

    for (i = prev_page; i <= next_page; i++) {
        if (i > total) {
            continue
        }
        if (i < 1) {
            continue
        }
        if (i === page) {
            li += `<li class="num active"><span>${i}</span></li>`
        } else li += `<li class="num" onclick="Clear(), pagination(${i}, ${total}), getData(link)"><span>${i}</span></li>`
    }
    
    if (page < total-1) {
        if (page < total - 2) {
            li += `<li class="dots"><span>...</span></li>`
        }
        li += `<li class="num" onclick="Clear(), pagination(${total}, ${total}), getData(link)"><span>${total}</span></li>`
    }
    if (page < total) {
        li += `<li class="btn next" onclick="Clear(), pagination(${page+1}, ${total}), getData(link)">
                <span>next <i class="fas fa-angle-right"></i></span></li>`;
    }
    
    ul.innerHTML = li;

    
}

function Clear() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

btn.setAttribute("onclick", 'Clear(), FindPage(28)');

function FindPage(total) {
    let input = document.querySelector(".pg_input").value;
    link = `https://catfact.ninja/facts?page=${input}&limit=${limit}`;
    page = input;
    pagination(page, total)
    getData(link)
    input = '';
}

getData(link)


// TODO
// reset input value 