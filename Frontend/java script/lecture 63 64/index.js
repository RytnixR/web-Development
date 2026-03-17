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

    let a1 = [1,2,3]
    let a2 = [4,5,6]
    let a3 = [7,8,9] 

/*  we can concate Array but no changes occur in any of them 
    let a1 = [1,2,3]
    let a2 = [4,5,6]
    let a3 = [7,8,9] 
    a1.concat(a2,a3)  
*/
console.log(a1.concat(a2,a3))

let number = [ 1,34 ,4 ,7,2,55]
console.log(number)
console.log(number.splice(1,2)) // splice(starting index, how many to delete, now what to add,anthor no. to add) use to remove  or add element from desire index 
console.log(number)
console.log(number.splice( 1, 0,34, 44,23 ,5 ,1))
console.log(number)


// loops concept

let a = [1,33,4,7,99]
console.log(a)

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)

})

let object = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in object) {  // forin loop : used for object
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(element)
    console.log(key , element);
    
    
}

for (const iterator of a) { // forin loop  : used for array
    console.log(iterator)
}


// map filter array  


let arrNew = [1, 3, 5, 7, 11]

/* long way  

let maparr = []
for (let index = 0; index < arrNew.length; index++) {
    const element = arrNew[index];
    maparr.push(element**2)

}

*/

// easy fast way

let maparr = arrNew.map((e, index , array)=>{
    return e**2
})
console.log(maparr);

// filter most used

const greaterthanseven = (e) => {
    if(e>7){
        return true
    }
    return false
}
console.log(maparr.filter(greaterthanseven))

let arr2 = [ 1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a*b
}

console.log(arr2.reduce(red))

let k = "Rytnix"
console.log(Array.from(k)) //  Or we can do this if we direct covert string to array console.log(Array.from("Rytnix"))