let arr = [1, 2, 3, 5, 8]

console.log(arr)
console.log(arr.length)

arr[0] = 847 // array are mutable

console.log(arr , typeof arr)

console.log(arr.toString()) // to convert to string along with comma

console.log(arr.join(" And ")) // make strng by joining the elements with parameter given in this "And"

console.log(arr.pop())  // this tell poped element
console.log(arr)

console.log(arr.push(100)) // this tell length after pushing
console.log(arr)
console.log(arr.push("Rytnix")) // this tell length after pushing
console.log(arr)

console.log(arr.shift()) //use to remove 1st element and show 1st element after poping it
console.log(arr)

console.log(arr.unshift("Aditya")) //this tell total no. of element after adding parameter here "Aditya" in 1st position
console.log(arr)

delete arr[2]
console.log(arr.length)
console.log(arr)
console.log(arr[2]) // undefine