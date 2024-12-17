const accountId = 21051698
let accountEmail = "vatsswork@gmail.com"
var accountPassword = "Vatsal#Javascript123"
accountCity = "Ghaziabad"   // not a good practice
let accountState

// accountId = 1213232  [TypeError: Assignment to constant variable.]
accountEmail = "v12@gmail.com"
accountPassword = "vats2123"
accountCity = "Bangalore"

/*
Prefer not using var 
due to issues in block scope and fuctional scope
*/

console.log(accountId);
// Instead of one-by-one printing, let's print it all using console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

