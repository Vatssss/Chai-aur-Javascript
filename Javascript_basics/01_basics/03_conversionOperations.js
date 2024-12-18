// Input is given as a number in string type
let score = "50"

// console.log(typeof score);

// Now type conversion
let scoreInNumber = Number(score)

// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);     
/* Output: 
    "50abc"=> NaN(Not a Number) 
    undefined=> NaN(Not a Number)  
    null=> 0; 
    boolean=> true (1), false (0);
*/

let isLoggedIn = "Vatsal"
let isLoggedIn_bool = Boolean(isLoggedIn)
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn_bool);
// console.log(typeof isLoggedIn_bool);
/*  Output:
    "" (empty string)=> false;
    "adkjad"=> true;
    0=> false;
    any other number=> true;
*/



// ************************** Operations ***************************************
// negative of a number
let value = 3
let negValue = -value
// console.log(negValue);

// Other operations: Addition(+), Subtraction(-), Multiplication(*), Power of(**), Divide(/), Modulus or Remainder(%)

// String operation
let s1 = "Hello!"
let s2 = " Vatsal."
// console.log(s1+s2)


// console.log( "1" + 2)            // 12
// console.log( 1 + "2");           // 12
// console.log( "1" + 2 + 2);       // 122
// console.log( 1 + "2" + 2);       // 122
// console.log( 1 + 2 + "2");       // 32

// console.log(true)           // true (bool)
// console.log(+true)          // 1
// console.log(""+true)        // true (string)

// Increment Operation
let gameCounter = 100
gameCounter++
console.log(gameCounter);

// Link to study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
