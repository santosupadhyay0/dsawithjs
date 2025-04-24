let arrayData = [10,40,60,90,50,20]
let newElementToBeInserted = 70

let positionOfElementToBeInserted = 2

for( let i = arrayData.length-1; i >= 0; i-- ) {
    if( i >= positionOfElementToBeInserted ){
        arrayData[i+1] = arrayData[i]
        if( i == positionOfElementToBeInserted ){
            arrayData[i] = newElementToBeInserted
        }
    }
}
console.log(arrayData)