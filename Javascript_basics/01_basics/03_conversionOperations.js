// Input is given as a number in string type
let score = "50"

console.log(typeof score);

// Now type conversion
let scoreInNumber = Number(score)

console.log(typeof scoreInNumber);
console.log(scoreInNumber);     
/* Output: 
    "50abc"=> NaN(Not a Number) 
    undefined=> NaN(Not a Number)  
    null=> 0; 
    boolean=> true (1), false (0);
*/

let isLoggedIn = "Vatsal"
let isLoggedIn_bool = Boolean(isLoggedIn)
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(isLoggedIn_bool);
console.log(typeof isLoggedIn_bool);
/*  Output:
    "" (empty string)=> false;
    "adkjad"=> true;
    0=> false;
    any other number=> true;
*/

