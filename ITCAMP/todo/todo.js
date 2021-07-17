const a=["wake up", "teach", "code"];

const list = document.querySelector(".lista");
const form = document.querySelector(".form");
const todo = document.querySelector(".todo")


function showList() {
        
    let newList = '';

    for(let i=0; i < a.length; i++){
        newList += `<li class="list_item">${a[i]}<i id="done" type="submit" class="fas fa-check"></i><i id="delete" type="submit" class="fas fa-trash-alt"></i></li>`
    }
    list.innerHTML = newList;
}

showList();

form.onsubmit = function(e) {
    e.preventDefault();
    a.push(input_add.value);
    document.getElementById("input_add").value = "";
    showList();
    
}



