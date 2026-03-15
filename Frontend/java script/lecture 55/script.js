console.log("Hey this is lecture 55 and java script lecture 2nd")

var a = 5;
var b = 6;
var c = "Rajeev";

console.log(a + b )
console.log(a + b + 8 )
console.log(typeof a,typeof b,typeof c);

const a1 = 6; // constant cannot change 

{
    // var a = 55;
    let a = 55;
    const a1 = 77;
    console.log(a1);
    console.log(a);
}
console.log(a1);
console.log(a); //55 if inside the block var is used mean var a = 55; otherwise let is used then vale is 5 as globally declared.....

// var is for global declaration and let is for a block 

let x = "Rajeev";
let y = 22;
let z = 3.556;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, y,typeof z,typeof p,typeof q,typeof r);

let o = {
    name: "rajeev khanduri",
    "job code": 8474,
    Is_smart : "true"
}
console.log(o);
o.salary = "18lpa";
console.log(o);