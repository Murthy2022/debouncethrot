console.log("In Debouncing")

let a=0

function handleSearch () {
    a++
    console.log("InSide Debouncing" + a)
}



function doSomemagic(fn,d){
    
let timer;

    return function(){
        let context = this , args = arguments
        clearTimeout(timer)
        timer=setTimeout(()=> {
            fn.apply(context,args)
        },d)

    }
}



const betterFunction = doSomemagic(handleSearch,300)
