// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(445)
//         }, 3500);
//     })

// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await x.json()
    //   console.log(data)
      return data

}

async function main() {
    
    
    console.log("Loading modules")
    
    console.log("Do something")
    
    console.log("Load data")
    
    let data = await getData()  // await only used in async function
    
    console.log(data)
    
    console.log("process data")
    
    console.log("Task 2")
    
}

main()
// data.then((v) => {
    
//     console.log("data")

//     console.log("process data")

//     console.log("Task 2")
// });
    