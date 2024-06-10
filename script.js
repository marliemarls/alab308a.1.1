//part 1 stack overflow
// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

//declared a variable called counter that will start at zero
let counter = 0;

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
incrementCount()
//it gives out at 8972
//part 2: Trampolines
