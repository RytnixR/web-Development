console.log("This is string tutorial");

let a = "Rytnix";

console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length)

let Name = "Rytnix"
let friend = "Adi"
console.log("His name is "+ Name + " and his friend name is " + friend)
// to make above  line easy we use ....
console.log(`His name is ${Name} and his friend name is ${friend}`) // new and easy convinent thing

/*
    escape sequence character is \
    it can be use like
    `raj"eev` the sting became raj"eev
    or substitude method "raj\"eev" here we use escape sequence

*/
let b = "Aditya"
console.log(b.length)
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1, 4)) //1 included and 4 is not
console.log(b.slice(1)) // 1 to last

console.log(b.replace("Ad", "7"))// only first occurance is replaced if we had another Ad that will remain same

console.log(b.concat(a))
console.log(b.concat(a, " friendforever", "and go to trips"))

console.log(b) //string are immutable changes mean other strings are generating in touppercase(),tolowercase(), slice(),concat etc.
