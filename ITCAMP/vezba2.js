

function expandedForm(num) {
    num = num.toString(); 
    resenje = "";
    for (i=0; i<num.length; i++) {
        if (num[i] !=="0") {
            resenje += num[i];
            for (j=i; j<num.length-1; j++) {
                resenje += "0"
            }
        resenje += " + "
        }
    }
    return resenje.slice(0, resenje.length - 3);
}


console.log(expandedForm(10254));
console.log(expandedForm(42));
console.log(expandedForm(70304));

