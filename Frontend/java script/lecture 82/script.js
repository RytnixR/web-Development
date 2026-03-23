async function  sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c){
    return a + b + c
}

(async function main() {
        
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(a)

    // let [x,y, ...rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x,y, rest)

    let obj  = {
        a : 1,
        b : 2,
        c : 3
    }

    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    // console.log(arr[0] + arr[1] + arr[2]) // same can be written as below line
    console.log(sum(arr[0], arr[1], arr[2]))  // or can be as writen below
    console.log(sum(...arr))

    // hosting  declaration on var move at the top of the block but assignment remains at same place but if we use let instead of var hosting didn't occure

})()