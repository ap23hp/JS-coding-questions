//calculates the sum of an array using recursion.
// A recursive function is a function which call itself to solve a particular problem. 
// It breaks down a big problem into smaller parts
// with each call and solves them one by one. It has two main parts: 
// the base case which stops the repitition and recursive case which repeats until base case is reached.
function sumArray(oldArray) {
  if (oldArray.length === 0) {
    return 0;
  } else {
    return oldArray[0] + sumArray(oldArray.slice(1));
  }
}

let newArray = [20, 30, 40, 50];
console.log(sumArray(newArray)); // 140

//Create a function that takes an array and returns the same array reversed, using recursion only.
//reverse([1, 2, 3, 4]) → [4, 3, 2, 1]

function reverse(arr){
if(arr.length===0){
    return []
}else return  [...reverse(arr.slice(1)), arr[0] ]
}
console.log(reverse([1, 2, 3, 4]))

//solve factorial using recursion
//4!=4*(4-1)

function factorial(n){
if(n===0 || n===1){
    return 1
}else{
  return   n*factorial(n-1)
}
}

console.log(factorial(3))

//The Fibonacci sequence
