const fs = require("fs")

// console.log(fs)

// console.log("starting")
// fs.writeFileSync("Rytnix.txt", "Rytnix can do whatever he wanted to")
// console.log("ending")

console.log("starting")

fs.writeFile("Rytnix2.txt", "Rytnix here", ()=>{
    console.log("done")
    fs.readFile("Rytnix2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Rytnix2.txt", " Haha apending the file", (e ,d)=>{
    console.log(d)
})

console.log("ending")