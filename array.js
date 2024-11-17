let arr1 = [2 ,3,4,5,2,3]

//Remove duplicates using Set

let newArr1 = [...new Set(arr1)]
console.log(newArr1)


//Remove duplicates using forEach and include

let newArr2 = [];

arr1.forEach((value) => {

if(!newArr2.includes(value)){
    newArr2.push(value)
}

})

console.log(newArr2)


//Remove duplicates not using any built in functions

let newArr3 = []

let count=1

for(i=0;i<arr1.length;i++){
    let isDuplicate=false
  for(j=0 ; j<newArr3.length;j++){
    if(arr1[i] == newArr3[j]){
        isDuplicate=true
        break;
    }
}
    if(!isDuplicate){
        newArr3.push(arr1[i])
    }
}

console.log(newArr3)