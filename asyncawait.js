console.log("In Async Await")


const pr1 = new Promise((resolve,reject) => {
setTimeout(()=>resolve("Data Resolved from p1 10 Sec"),10000)
})

const pr2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve("Data Resolved from p2 5 Sec"),5000)
    })

async function getdata(){

let c = await pr1;
console.log(c + " in Async function")

let d = await pr2;
console.log(d + " in Async function")


//return c;

}



let b = getdata()
//b.then(data => {console.log(data + " in Outside Async")})
console.log("Hello")