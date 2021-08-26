arr = ['aaa', 'bbb','ccc']



// FOR EACH

arr.forEach(el => {
    console.log(el+"1")
});



// MAP

arr1 = arr.map(el => {
    return el+"123"
})

console.log(arr1)
console.log(arr) //no references



// FIND 

arr1 = arr.find(el => {
    return el.includes("bb")
})

console.log(arr1)



// EVERY

arr1 = arr.every(el => {
    return el.includes("b")
})

console.log(arr1)



// SOME

arr1 = arr.some(el => {
    return el.includes("b")
})

console.log(arr1)