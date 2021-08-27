

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




L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
M = ["A", "B", "C", "W"]


function stockList(listOfArt, listOfCat){
    if (listOfCat.length === 0 || listOfArt.length === 0) {
        return ""
    }
    res = [];
    arr = []
    for (i=0; i<listOfCat.length; i++) {
        arr.push(listOfArt[i].split(" "))
    }

    for (let i = 0; i < listOfCat.length; i++) {
        num = 0;
        for (let j = 0; j <arr.length; j++) {
            if (listOfCat[i] === arr[j][0][0]) {
                num += parseInt(arr[j][1])
            }
        }
        res.push(`(${listOfCat[i]} : ${num})`)
    }
    res = res.join(" - ");
    return res
}


console.log(stockList(L,M));





