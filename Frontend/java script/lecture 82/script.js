async function  sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {
        
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(a)

    let [x,y, ...rest] = [1, 5, 7, 8, 9, 10]
    console.log(x,y, rest)
})()