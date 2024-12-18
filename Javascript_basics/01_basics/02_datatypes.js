"use strict" // treat all JS code as newer version

// alert(3+3)   /* We are using nodeJS, not browser */

console.log(3+3)
console.log("Vatsal")
// Code readability should be high


// DataTypes in Javascript

let emp_name = "Vatsal" // string
let age = 21    // number
let isLoggedIn = true   // boolean
let temp = null // null
let b 

const data = [
    {Values: emp_name, Type: typeof emp_name},
    {Values: age, Type: typeof(age)},
    {Values: isLoggedIn, Type: typeof(isLoggedIn)},
    {Values: temp, Type: typeof(temp)},
    {Values: b, Type: typeof b}
]
console.table(data)


// number => 2^53
// bigint => for more than number
// string => single quote, double quote (preferred)
// boolean => true/false
// null => standalone value [type is object]
// undefined => memory is allocated, no value is defined for the variable
// symbol => unique

// object - later

console.log(typeof undefined)
console.log(typeof null)