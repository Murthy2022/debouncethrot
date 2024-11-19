console.log("In Generator")

function* myGenerator(){
    yield 1;
    yield 2;
}

const gen = myGenerator();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

console.log(...gen)


function* numbers() {
    yield 1;
    yield 2;

}

function* letters() {
    yield 'A';
    yield 'B';

}



function* Combine() {

    yield* numbers();
    yield* letters();
}

let mygen = Combine()
//console.log(mygen.next())
console.log(...mygen)



function* myGenerator1(){
    try{
    yield 'Step1'
    yield 'Step2'
    
    } finally {
        console.log('Clean up')
    }
    yield 'Step3'
}

let newgen1 = myGenerator1()
console.log(newgen1.next())
console.log(newgen1.return('Return clean up'))
//console.log(newgen1.next())


function* myGenerator2(){
    try{
    yield 'Step1'
    yield 'Step2'
    
    } catch {
        console.log('From Throw')
    }
    yield 'Step3'
}

let newgen2 = myGenerator2()
console.log(newgen2.next())
console.log(newgen2.throw())


