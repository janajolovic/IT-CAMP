

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




// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
// M = ["A", "B", "C", "W"]


// function stockList(listOfArt, listOfCat){
//     if (listOfCat.length === 0 || listOfArt.length === 0) {
//         return ""
//     }
//     res = [];
//     arr = []
//     for (i=0; i<listOfCat.length; i++) {
//         arr.push(listOfArt[i].split(" "))
//     }

//     for (let i = 0; i < listOfCat.length; i++) {
//         num = 0;
//         for (let j = 0; j <arr.length; j++) {
//             if (listOfCat[i] === arr[j][0][0]) {
//                 num += parseInt(arr[j][1])
//             }
//         }
//         res.push(`(${listOfCat[i]} : ${num})`)
//     }
//     res = res.join(" - ");
//     return res
// }


// console.log(stockList(L,M));






// str = 'man i need a taxi up to ubud'
// alp = "abcdefghijklmnopqrstuvwxyz"

// function high(str) {
//     arr = []
//     str = str.split(" ");
//     for (i=0; i<str.length; i++) {
//         word = 0
//         for(j=0; j<=str[i].length; j++) {
//             for (k=0; k<alp.length; k++) {
//                 if (str[i][j] === alp[k]) {
//                     word += alp.indexOf(alp[k]) + 1
//                 }
//                 }
//             }
//         arr.push({ word : str[i], points : word})
//         }
//     arr.sort((a,b) => a.points - b.points)
    
//     return arr[arr.length-1].word
// }


// console.log(high(str))





// array = [NaN, 0, 15, false, -22, undefined, 47, null];


// array = array.filter(el => !!el)

// console.log(array)




// array1 = [1,0,2,3,4]
// array2 = [3,5,6,7,8,13]

// array = array2.map(function(el, indx, arr) {
//     if (this[indx]) {
//         return el + this[indx];
//     } else return el;
// }, array1);


// console.log(array)







// // Beginner Series #3 Sum of Numbers

// function getSum(a,b) {
//     sum = 0;
//     if (a==b) {
//         return a;
//     } else {
//         if (a < b) {
//             for (let i = a; i <= b; i++) {
//                 sum += i;
//             }
//         } else {
//             for (let i = b; i <= a; i++) {
//                 sum += i;
//             }
            
//         }
//     }
//     return sum;
// }

// console.log(getSum(1,2))





// function digital_root(n) {
//     n = n.toString()
//     sum = 0;
//     if (n.length === 1) { 
//         return n;
//     } else {
//         while (true) { 
//         }
//     }
//     return sum
// }

// console.log(digital_root(16))





// array = ["ryu", "ken", "chun-li", "cammy", "guile", "sakura"]


// array.pop()
// array.splice(array.length-1, 0, "sagat", "juri")

// array = array.map((el,i) => el + ` ${i}`);

// myString = array.join(" - ")


// console.log(myString)





// HUMAN READABLE TIME


// function humanReadable(seconds) {
//     ss = 0;
//     mm = 0;
//     hh = 0;
//     hh = Math.floor(seconds / 3600);
//     mm = Math.floor((seconds - hh * 3600) / 60);
//     ss = Math.floor(seconds - hh * 3600 - mm * 60);
//     if (ss < 10) {
//         ss = "0" + ss;
//     }
//     if (mm < 10) {
//         mm = "0" + mm;
//     }
//     if (hh < 10) {
//         hh = "0" + hh;
//     }
//     return `${hh}:${mm}:${ss}`
// }


// console.log(humanReadable(84599))




// Strange Strings Parser!


// function wordSplitter(string){
//     for (i=0; i<string.length; i++) {
//         if (((string[i].charCodeAt() >= 32 && string[i].charCodeAt() <= 47) || 
//             (string[i].charCodeAt() >= 58 && string[i].charCodeAt() <= 63) || 
//             (string[i].charCodeAt() >= 91 && string[i].charCodeAt() <= 96) ||
//             (string[i].charCodeAt() >= 123 && string[i].charCodeAt() <= 126)) && (string[i] !== ".") && (string[i] !== "-")) {
//             string = string.replace(string[i], " ")
//         }
//     }
//     string = string.split(" ")
//     for (i=0; i<string.length; i++) {
//         if (string[i] === "") {
//             string.splice(i,1)
//         }
//     }
//     return string;
// }



// str = "32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25";

// console.log(wordSplitter(str))




console.log("naredba1");
console.log("naredba2");
setTimeout(() => {
    console.log("naredba3")
}, 1000);
console.log("naredba4");