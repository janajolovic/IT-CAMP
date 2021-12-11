function isDuoDigit(num) {
    let set = new Set(String(num).split(""));
    if (set.size === 2) {
        return "y";
    } else return "n";
}


console.log(isDuoDigit(11221));
console.log(isDuoDigit(3433));
console.log(isDuoDigit(112214521));
console.log(isDuoDigit(1));