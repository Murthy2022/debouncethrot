console.log("In Throtalling")

let b=0

function normafn() {
    b++
    console.log("InSide Throtalling"+" "+b)
}



function doMagicForThrotalling(fnc,delay){

    let flag=1

    return function(){
        let context=this , args=arguments

        if(flag){
            fnc.apply(context,args)
            flag=0;
        setTimeout(() => {
            flag=1
        },delay)
        }
 }
}




const modifiedFUnction = doMagicForThrotalling(normafn,3000)




window.addEventListener("resize",modifiedFUnction)