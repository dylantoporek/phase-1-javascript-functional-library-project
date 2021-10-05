function receiver(collection){
    if (Array.isArray(collection)){
       return [...collection]
    }
    else return Object.values(collection)
}
function myEach(collection, callback){
    
    let inputArr = []
    for(const key in collection){
        inputArr.push(collection[key])
    }
    
    for(let i = 0; i < inputArr.length; i++){
        callback(inputArr[i])
    }
    return collection
}

function myMap(collection, callback){
    let inputArr = []
    for (const key in collection){
        inputArr.push(collection[key])
    }

    let updatedArr = []
    for (let i = 0; i < inputArr.length; i++){
        updatedArr.push(inputArr[i] * 3)
    }
    return updatedArr
}

function myReduce(collection, callback, acc){
    
    let arr = receiver(collection)

    if (!acc){
        acc = arr[0]
        arr = arr.slice(1)
    }

    for (let i = 0; i < arr.length; i++){
        //console.log(acc, 'ACC')
        //console.log(callback(acc, arr[i], collection), 'CALLBACK')
        acc = callback(acc, arr[i], collection)
    }
     

    //console.log(acc, 'ACC')
    return acc
    
    
}

function myFind(collection, predicate){
    let array = receiver(collection)
    for(let i = 0; i < array.length; i++){
        if (predicate(array[i])){
            return array[i]
        }
    }
}

function myFilter(collection, predicate){
    let array = receiver(collection)
    let final = []
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            final.push(array[i])
        }
    }
    return final
}

function mySize(collection){
    let array = receiver(collection)
    return array.length
}

function myFirst(array, n){
   if (!n){
       return array[0]
    }

   let final = []
   if(n){
       for (let i = 0; i < n; i++){
           final.push(array[i])
       }
       return final
   }
   
}

function myLast(array, n){
    if (!n){
        return array[array.length - 1]
    }

    let final =[]
    if (n){
        for (let i = 0; i < n; i++){
            final.push(array[array.length - 1 - i])
        }  
        final.reverse()
        return final         
    }

}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}