console.log("In Promise")

const cart = ["Mobile", "Laptops", "Dress"]



createOrder(cart)
.then(function (orderId){
    console.log(orderId)
    return orderId;
    //proceedToPayment
})
.catch(function (err){
    console.log(err.message)
})
.then(function (orderId) {
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    console.log(paymentInfo)
    return paymentInfo
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo)
})
.then(function (balance){
    console.log(balance)
})


//Producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (validateCart) {
            const err = new Error("Cart is not valid")
            reject(err)
        }
        else{
        const orderId = "12321"
        setTimeout(() => resolve(orderId) , 3000)
        }
        
    });
    return pr
}

function validateCart(){
    return false
}


function proceedToPayment(orderId){
    return new Promise(function (resolve , reject){
        resolve("Payment Sucessfull");
    });
     
}

function updateWalletBalance(paymentInfo){
    const pr2 = new Promise(function(resolve, reject){
if(paymentInfo == "Payment Sucessfull"){
console.log(paymentInfo)
    resolve("-3000")
}});

return pr2


}
