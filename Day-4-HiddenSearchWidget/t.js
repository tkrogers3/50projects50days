function multiplyAndAdd(multiply){
    const pow = multiply ** multiply
    return function(add){
        return  add / pow 
    }
}

const result = multiplyAndAdd(2)(4)

console.log(result);