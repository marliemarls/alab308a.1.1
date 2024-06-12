//part 1 stack overflow
// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

//declared a variable called counter that will start at zero
let counter = 0;
let nestedArr = [[[[1], [2], [3]]]]
//creating a function that is will increment the counter
function incrementCount(){
    //using the try catch method to be able to try a block of code, if that block of code has an error, the method will CATCH the error and console it to me
try{
    //console current counter number and then increment counter by 1, after its incremented, I will call the function again.
    console.log(counter)
    counter++
    incrementCount()
} catch(e){
    //error will be caught and will be consoled out to me as well as the current number that counter is at so that we know how many iterations can occur in this recursion before the code breaks
    console.error(e)
    console.log(counter)
} 
    
}
//invoking / calling the function 
// incrementCount()
//it gives out at 8972


//part 2: Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.
//i will create a function that will take in a nested array
//function will flatten

function flattenArr(arr){
    const givenArr = arr.flat()
    try{
        console.log(givenArr.flat())
        flattenArr(givenArr)
    } catch(e){
        console.error(e)
        console.log(e)
    }

}


// console.log(flattenArr([[[[1], [2], [3]]]]))

const trampoline = (func, arr) => {
    const usingHelper = func(arr)
    return usingHelper
}

function newFunc(arr){
    return arr.flat(Infinity)
}

// console.log(trampoline(newFunc, nestedArr))

//part 3: deferred execution
