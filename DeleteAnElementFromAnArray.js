let data = [10,20,30,40,50,60]

let positionOfElementToBeDeleted = 2


for( let i = positionOfElementToBeDeleted; i < data.length - 1; i++ ){
    data[i] = data[i+1]
}
data.length = data.length - 1;

console.log(data)