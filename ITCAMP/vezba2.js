

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




array1 = [1,0,2,3,4]
array2 = [3,5,6,7,8,13]

array = array2.map(function(el, indx, arr) {
    if (this[indx]) {
        return el + this[indx];
    } else return el;
}, array1);


console.log(array)