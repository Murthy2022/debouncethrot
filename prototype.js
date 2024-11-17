let arr = ["JSN" , "Murthy"]
let obj = {
    name : "Mjruthy",
    city : "Hyderabad",
    age : 28,
    getIntro : function(){
        console.log(this.name + "from" + this.city)
    }
}
let obj2 = {
    name : "Hdr"
}
obj2.__proto__=obj
obj2.sayAge = function(){
    console.log("My Age is :" + this.age)
}
console.log(obj2.getIntro())
console.log(obj.name);
console.log(obj2.name)
console.log(obj2.sayAge())


function Animal(name){
    this.name = name;
}

Animal.prototype.sayHi = function(){
    console.log("My name is" + this.name)
}

let dog=new Animal("Buddy");
dog.sayHi()