const users = {email: "jana@gmail.com", password: "123456"}

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".form");

form.onsubmit = function(e) {
    e.preventDefault();
    if(password.value.length >=5 && email.value.length >=5) {
        if(email.value === users.email && password.value === users.password){
            alert("Succesfuly loged in");
        } else {
            alert("Invalid credentials");
        }
    } else {
        alert("Password must contain more than 5 characters");
    }
    console.log(email.value)
}

