console.log("I Shallow and Deep")

const Person = {
    name : "Murthy",
    age : 30,
    address : {
        city : "Hyderabad",
        country : "India"
    }
}


console.log(Person.address.city)

 const shallowcopy = Object.assign({},Person)

 //console.log(shallowcopy.address.city)

// shallowcopy.address.city="Delhi"

// console.log(shallowcopy.address.city)
// console.log(Person.address.city)


shallowcopy.name="Sowji"
console.log(shallowcopy.name)
console.log(Person.name)




// const deepcopy = JSON.parse(JSON.stringify(Person))

// deepcopy.address.city="Delhi"

// console.log(deepcopy.address.city)
// console.log(Person.address.city)


