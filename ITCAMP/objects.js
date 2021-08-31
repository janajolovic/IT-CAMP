// const user = {
//     name : "jana",
//     greet() {
//         console.log(`hello ${user.name}`);
//         console.log(`hello ${this.name}`);
//         name_upper = function() {
//             console.log(`in regular function: ${user.name.toUpperCase()}`)   
//             // console.log(this.name.toUpperCase())  // ne radi sa this jer se vise ne odnosi na objekat
//                                                     // moze da se stavi i let self = this i onda radi
//         }
//         name_upper()

//         name_upper2 = () => {
//             console.log(`in arrow function: ${this.name.toUpperCase()}`)
//         }
//         name_upper2()
//     }
// }

// user.greet()





// const person = {
//     firstName : 'jana',
//     lastName : 'jolovic',
//     getName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// function registerUser() {
//     this.getName()
// }

// const register = registerUser.bind(person)   // BIND - the keyword this will refer to the arg of bind
// // CALL & APPLY

// register()


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(this.name, this.age)
    }
}


const person = new Person('jana', '17')
console.log(person)