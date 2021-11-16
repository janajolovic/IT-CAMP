// HOISTING


// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num; // Declaration
// num = 6; // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.



// The same thing happens if we declare and initialize the variable in the same line.

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.



// CLOSURES

// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();



// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc();





// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12



function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}

const add3 = makeAdder(3);
const add10 = makeAdder(10);

plus3 = add3(3);
plus5 = add10(5);

console.log(plus3);
console.log(plus5);
