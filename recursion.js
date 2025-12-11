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
//0, 1, 1, 2, 3, 5, 8, 13, ...
//fib(n)=fib(n-1) +fib(n-2)

function Fibonacci(n){
    if(n===0){
        return 0
    } else if(n===1){
        return 1
    } else if(n>1){
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
}

console.log(Fibonacci(5))

//Count characters in a string
//"hello" → 5

function countChar(str){
    if(str.length===0){
        return 0
    }else {
        return 1 +countChar(str.slice(1) )
    }
}
console.log(countChar("hello"))

//Sum of digits of a number
// 1234-> 1 + 2 + 3 + 4 = 10

function sumDigits(num){
  if(num === 0){
      return 0;
  } else {
      return (num % 10) + sumDigits(Math.floor(num / 10));
  }
}

console.log(sumDigits(1234)); // 10

//Find max in array
function findMax(arr){
if(arr.length===1){
    return arr[0]
}else {
    return  Math.max(arr[0], findMax(arr.slice(1)));
}
}

console.log(findMax([3,8,9]))
// Jab hum findMax([3, 8, 9]) call karte hain, 
// toh function pehle apne aap ko chhote arrays ke saath baar-baar call karta chala jaata hai — 
// pehle [3, 8, 9], phir [8, 9], phir [9]. Jaise-hi array [9] reh jaata hai, 
// base case hit hota hai aur function 9 return kar deta hai. 
// Ab recursion wapas neeche se upar results 
// return karna shuru karta hai: [8, 9] wale step me Math.max(8, 9) = 9 milta hai, 
// phir original call [3, 8, 9] me Math.max(3, 9) = 9 milta hai. Yani pehle recursion
//  depth me jaata hai (har baar array chhota hota jaata hai), aur base case milte 
// hi wapas upar aate hue har level apna comparison karta hai aur final answer return hota hai