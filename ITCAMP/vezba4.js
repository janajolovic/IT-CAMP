import fetch from "node-fetch";

var data = {}

const getData = async () => {

    const response = await fetch("https://api.github.com/users/github")
    const res = await response.json();
    data = res;
}

await getData();
console.log(data)