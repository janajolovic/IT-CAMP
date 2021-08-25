// var year = 2016;
// var month = 5;
// var DayCount = 0; // var for numbers of days in month


// switch (month) {
//     // months with 31 days
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         DayCount = 31;
//         break
//     // months with 30 days
//     case 4:
//     case 6: 
//     case 9: 
//     case 11:
//         DayCount = 30;
//         break
//     // february
//     case 2:
//         // leap year
//         if ((year%4==0 && !(year % 100 == 0)) || year % 400 == 0) {
//             DayCount = 29;
//         } else {
//             DayCount = 28;
//         }
//         break
//     default:
//         DayCount = -1;
// }

// console.log(DayCount)




// var1 = 2428;

// switch(true){
//     case var1>0:
//         console.log("pozitivan");
//         break
//     case var1===0:
//         console.log("nula");
//         break
//     case var1<0:
//         console.log("negativan");
//         break
//     default:
//         console.log("neispravan");
// }

// for (i=0; i<=50; i++ ) {
//     if (i % 3 === 0 && i % 5 === 0)
//     console.log('fizz buzz')
// }




// text = 'w3resource';
// console.log(text)
// for(i=0; i<=text.length-1; i++) {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     console.log(text)
// }


// n = 12;

// for (let i=1; i<=n; i++) {
//     if (n%i===0) 
//         console.log(i);
// }



// broj = prompt("unesite prvu vrednost broja: ");

// while (broj>0) {
//     if (broj>=10 && broj<=20) {
//         console.log("cestitamo");
//         break
//     } else {
//         console.log("pogresan raspon");
//         broj=prompt("pokusajte ponovo");
//     }
// }



// while (true) {
//     operacija = prompt("unesite znak operacije");
//     if (operacija === "exit") {
//         break
//     }
//     br1 = parseInt(prompt("unesite prvi broj"));
//     br2 = parseInt(prompt("unesite prvi broj"));
//     switch (operacija) {
//         case "+":
//             console.log(br1+br2);
//             break
//         case "-":
//             console.log(br1-br2);
//             break
//         case "*":
//             console.log(br1*br2);
//             break
//         case "/":
//             console.log(br1/br2);
//             break
//     }
// }




// lozinka='1234';

// uneta_lozinka = prompt("unesite lozinku: ")
// while (true) {
//     if (lozinka===uneta_lozinka) {
//         console.log("uneli ste ispravnu lozinku");
//         break;
//     } else {
//         console.log("neispravna lozinka");
//         uneta_lozinka = prompt("unesite lozinku: ")
//     }
// }






// text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

// var a = 0;
// var e = 0;
// var count_i = 0;
// var o = 0;
// var u = 0;

// for (i=0; i<text.length; i++) {

//     if (text[i]==="a") {
//         a++
//     }
//     else if (text[i]==="e") {
//         e++
//     }
//     else if (text[i]==="i") {
//         count_i++
//     }
//     else if (text[i]==="o") {
//         o++
//     }
//     else if (text[i]==="u") {
//         u++
//     }
// }



// console.log("a:", a);
// console.log("e:", e);
// console.log("i:", count_i);
// console.log("o:", o);
// console.log("u:", u);










// color = ["Blue", "Green", "Red", "Orange", "Violet"];

// o = ["th", "st", "nd", "rd"];
// o.shift()
// for (i=0; i<3; i++) {
//     console.log(`${i+1}${o[i]} choice is ${color[i]}`)
// }







// // str = 'abraxxxas';
// str='xoxotrololololololoxxx';
// // str="softX kitty, warm kitty, xxxxx";
// // str="softx kitty, warm kitty, xxxxx";



// index = str.indexOf("x");
// // str = str.slice(index+1);
// // console.log(str.startsWith("xx"));

// if (str[index] === str[index+1] && str[index] === str[index+2]) {
//     console.log(true);
// } else {
//     console.log(false)
// }




// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// array = [];

// for (let i = 0; i < array2.length; i++) {
//     if (array1[i] === undefined) {
//         array.push(array2[i])
//     } else {
//         array.push(array1[i]+array2[i]);
//     }
// }

// console.log(array);




// n1 = [100,1,3,0];
// n2 = [100,2,1,10];
// n3 = []

// lng = 0;


// function checkVal(val) {
//     if (val !== undefined && val !== null) return true;
//     return false;
// }

// if (n1.length > n2.length) lng=n1.length;
// else lng = n2.length;

// for (let i = 0; i < lng; i++) {
//     if (checkVal(n2[i]) && !(n1.includes(n2[i]))) {
//         n3.push(n2[i])
//     } 
//     if (checkVal(n1[i]) && !(n2.includes(n1[i]))) {
//         n3.push(n1[i])
//     }
// }


// console.log(n3)








// var array = [25,25,10,20,10,40,50,60,70,15,35];
// var array1 = [25,25,10,20,10,40,50,60,70,15,35];

// target = 50;

// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if ((array[i]+array[j])===target && array1.includes(array[i]) && array1.includes(array[j])) {
//             console.log(array[i],array[j])
//             array1.splice(i,1);
//             array1.splice(j,1);
//         } 
//     }
// }



// var array = [25,25,10,20,30,40,50,10,60,70,15,35];

// target = 50;

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[i]+array[j]===target && i!==j) {
//             console.log(array[i],array[j])
//             array.splice(i,1);
//             array.splice(j-1,1);
//             break;
//         } 
//     }
// }



// array1 = [1,2,3];
// array2 = [2,30,1];

// array3 = [];



// for (let i = 0; i < array2.length; i++) {
//     if (!array3.includes(array2[i])) {
//         array3.push(array2[i])
//     }
    
// }

// console.log(array3)









// arr1 = [43, 56, 23, 89, 74,  90, 66, ,90, 34, 65, 12, 67, 234, 63];

// arr1.sort(function(a,b) {return a-b});
// arr1.reverse();
// arr1= Array.from(new Set(arr1));
// console.log(arr1);


// console.log(arr1[2]);








// function unos_niza() {
//     n = [];
//     duzina_niza = parseInt(prompt("unesite duzinu niza: "));
//     for (let i = 0; i < duzina_niza; i++) {
//         n.push(parseInt(prompt("unesite parametar;")));
//     }
//     return n; 
// }


// function kvadNiza(niz) {
//     for (let i = 0; i < niz.length; i++) {
//         niz[i] = niz[i]**2;
//     }
//     return niz;
// }

// niz1 = unos_niza();
// niz1 = kvadNiza([...niz1]);
// console.log(niz1);








// function longest_w(str) {
//     arr1 = str.split(" ");
//     longest_word = arr1[0];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i].length > longest_word.length) {
//             longest_word = arr1[i];
//     }
//     return longest_word;
// }

// }

// console.log(longest_w("the quick brown fox"))







// function moja_f(niz) {
//     niz.sort(function(a,b) {return a-b});
//     niz= Array.from(new Set(niz));
//     console.log(niz[1]);
//     console.log(niz[niz.length-2]);
// }


// moja_f([1,1,1,1,2,3,4,5,8,2,10])






// function perfect_num(num) {
//     divisors = 0;
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             divisors += i;
//         }        
//     }
//     if (num > 0 && divisors === num && ((divisors+num)/2) === num) {
//         console.log("perfect number");
//     }
// }



// perfect_num(28);





// function alphabetPosition(text) {
//     res = "";

//     for (let i = 0; i < text.length; i++) {
//         letter = text[i].toLowerCase();
//         if (letter.charCodeAt(0) <= 122 && letter.charCodeAt(0) >= 97) {
//             res += " " + (letter.charCodeAt(0) - 96);
//         }
        
//     }
//     return res;
// }


// str = "the sunset sets at twelve o'clock."

// console.log(alphabetPosition(str));







// function squareDigits(num) {
//     res = '';
//     for (let i = 0; i < num.toString().length; i++) {
//         num_sq = num.toString()[i];
//         res += num_sq**2;
//     }
//     return parseInt(res);
// }


// num = 9119;

// console.log(squareDigits(num));





// function solution(num) {
//     zbir = 0;
//     for (let i = 1; i < num; i++) {
//         if (i % 3 == 0) {
//             zbir += i;
//         }  else if (i % 5 == 0) {
//             zbir += i;
//         }  else if (num <= 0) {
//             return 0;
//         }
//     }
//     return zbir;
// }

// console.log(solution(50));






// b = Math.floor(15/2);
// p = 2;
// f = 3;
// h = 5;
// c = 10;

// resenje = 0;


// while (b>0 && (p>0 || f>0)) {
//     if (h>c) {
//         if (p > 0) {
//             b--;
//             resenje += h;
//             p--;
//         }
//         else if (f>0) {
//             b --;
//             resenje += c;
//             f --;
//         }
//         }
//     if (c>h) {
//         if (f > 0) {
//             b --;
//             resenje += c;
//             f --;
//         }
//         else if (p > 0) {
//             b --;
//             resenje += h;
//             p --;
//         }
//         }
// }


// console.log(resenje)








// function findNb(m) {
//     resenje = 0;
//     n = 1;
//     while (resenje < m) {
//         resenje += n**3
//         n += 1; 
//     }

//     if (resenje===m) {
//         return n-1;
//     } 
//     return -1;
// }

// console.log(findNb(1071225));





// function bus(n) {
//     br_putnika = 0;
//     for (i=0; i<n.length; i++) {
//         br_putnika += n[i][0];
//         br_putnika -= n[i][1];
//     }

//     return br_putnika;
    
// }


// number = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];

// console.log(bus(number));







// function number(n) {
//     novi_niz = [];
//     for (i=0; i<n.length; i++) {
//         if (n[i] % 2 === 1) {
//             novi_niz.push(n[i]);
//         }
//     }
//     novi_niz.sort(function(a,b) {return a-b});
//     for (i=0; i<n.length; i++) {
//         if (n[i] % 2 === 0) {
//             index = n.indexOf(n[i]);
//             novi_niz.splice(index,0,n[i]);
//         }
//     }

//     return novi_niz;
// }


// niz = [9,8,7,6,5,4,3,2,1,0];
// console.log(number(niz));





// function likes(names) {
//     len = names.length;
//     switch (true) {
//         case len===0:
//             return "no one likes this";
//         case len===1:
//             return `${names[0]} likes this`;
//         case len===2:
//             return `${names[0]} and ${names[1]} like this`;
//         case len===3:
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         case len>=4:
//             return `${names[0]}, ${names[1]} and ${len-2} others like this`;
//         default:
//             break;

//     }
// }


// console.log(likes([]))
// console.log(likes(["peter"]))
// console.log(likes(["peter", "jacob"]))
// console.log(likes(["peter", "jacob", "alex"]))
// console.log(likes(["peter", "jacob", "alex", "max"]))







// function expandedForm(num) {
//     num = num.toString(); 
//     resenje = "";
//     for (i=0; i<num.length; i++) {
//         if (num[i] !=="0") {
//             resenje += num[i];
//             for (j=i; j<num.length-1; j++) {
//                 resenje += "0"
//             }
//         resenje += " + "
//         }
//     }
//     return resenje.slice(0, resenje.length - 3);
// }


// console.log(expandedForm(10254));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));





function countSmileys(arr) {
    count = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i].length === 2) {
            if ((arr[i][0].includes(":") || arr[i][0].includes(";")) && 
                (arr[i][1].includes(")") || arr[i][1].includes("D")))  {
                count+=1;
            }
        }
        if (arr[i].length === 3) {
            if (    (arr[i][0].includes(":") || arr[i][0].includes(";")) && 
                    (arr[i][2].includes(")") || arr[i][2].includes("D")) && 
                    (arr[i][1].includes("~") || arr[i][1].includes("-")))  {
                count+=1;
            }
        }
    }
    return count;
}

console.log(countSmileys([":D", ";-)", ":("]));