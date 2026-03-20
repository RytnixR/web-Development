let a = prompt("Enter a number") // prompt give us string

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b) // parseInt convert string to integer



try {
    console.log("the sum is ",sum*x)

} catch (error) {
    
    console.log("Error found")
    
}
finally{
    console.log("files are being closed and db connection is being closed") //finally is used sometime for using it after return statement in a function
}