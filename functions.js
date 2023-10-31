/**
 * Ways of writing functions
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Anonymous function
 * 4. Arrow functions
 */

// 1. Function Declaration

function twoSum(num1, num2) {
  const sum = num1 + num2

  return sum
}

const result = twoSum(2, 4)

console.log(result)

// 2. Function Expression

const twoSumJs = function (num1, num2) {
  return num1 + num2
}

const result2 = twoSumJs(45, 5)
console.log(result2)

// 3. Anonymous Function
const myArray = []
myArray.map(function (num1, num2) {
  return num1 + num2
})

// 4. Arrow Function

// let twoSumArrow = () => {}
const twoSumArrow2 = (num1, num2) => {
  return num1 + num2
}
const result3 = twoSumArrow2(78, 45)
console.log(result3)

// 4.1 Arrow function - one liner
const twoSumArrow3 = (num1, num2) => num1 + num2

const result4 = twoSumArrow3(78, 45)
console.log(result4)

// Challenges
// 1. Write a function that takes in two numbers and return the largest

const largestofTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }

}
const result5 = largestofTwoNumbers(10, 20)
console.log(result5)


// 2. Store the result of the first function in a variable, then write anotherfunction that takes the result and multiplies it by 2.

function multiplyBy2() {
  return result5 * 2

}
console.log(multiplyBy2())

// 3.  The Problem - Write a program that takes one number and print the number.
// If the number is multiple of 3 print “Fizz” instead of the number.
// If the number is multiple of 5 print “Buzz” instead of the number.
// If the number is multiple of both 3 and 5 print “FizzBuzz”.

const oneNumber = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
  return ""
}

}
console.log(oneNumber(9))


// 4. Given a string, return true if the string is a palindrome or false if it is not.  
//   Palindromes are strings that form the same word if it is reversed. 
//   *Do* include spaces and punctuation in determining if the string is a palindrome.
//   Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true




// 5. Write a function that takes an array of numbers and moves all of the 0s in the array to the beginning of the array then returns the new array.
// Example Input: [4, 0, 2, 0, 1, -3, 5, 0]
// Should Return: [0, 0, 0, 4, 2, 1, -3, 5]


  



    





