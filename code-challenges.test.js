// // ASSESSMENT 2: Coding practical questions with Jest

// const { it } = require("@jest/globals")
// const { indexOf } = require("lodash")
// const { describe } = require("yargs")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function

// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//create a function called is NumDivisbleByThree
//My function takes a (number) as an argument
//My function needs to check if my number is evenly divided by 3 or not
// a) Create a test with expect statements for each of the variables provided.
//I had a really hard time with this we hade to talk about this with class 
//It would be realy helpful if we have more time to work on the challenges with the class.
//I 

describe("numDivisbleByThree", () => {
    var num1 = 15
    var num2 = 0
    var num3 = -7
    it("returns 'divisible by 3'", () => {
      expect(numDivisbleByThree(num1)).toEqual("15 is divisible by three")
      expect(numDivisbleByThree(num2)).toEqual("0 is divisible by three")
      expect(numDivisbleByThree(num3)).toEqual( "-7 is not divisible by three")
    })
  })
// b) Create the function that makes the test pass.
  const numDivisbleByThree = (number) => {
    
    if( number % 3 === 0){
      return `${number} is divisible by three`
    } else if( number % 3 !== 0){
    return `${number} is not divisible by three`
  }else{
      return "Something went wrong"
  }
  }
var num1 = 15
// these are my arguments
// Expected output: "15 is divisible by three"

var num2 = 0
// these are my arguments
// Expected output: "0 is divisible by three"

var num3 = -7
// these are my arguments
// Expected output: "-7 is not divisble by three"





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized. // Note, here you are saying capitalize all the words in the array but in the expected output it shows only the first letter of every word capital

//create a function called captFirstLetter
//My func needs to take an arrayfunc (array)
//input: an array of words
//output: returns an array with all the words capitalized?
//i need to use .map() because I need the same length of array and it will return it here the same length only here I need the first  letter of each first index to be Calpital.
// a) Create a test with expect statements for each of the variables provided.

describe("captFirstLetter", () => {

    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


    test("returns 'capitaliz the first letter of every word'", () => {
      expect(captFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(captFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
      
    })
  })
// // b) Create the function that makes the test pass.
//   const captFirstLetter = (array) => {
//     re words = array.map(word => {
        
//     })
    // return words.charAt(0).toUpperCase() + words.sclice(1)

  const captFirstLetter = (array) => {
    return array.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
  }
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]








// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// Create a funtion called the firstVowel 
//Function needs to log the first index of a vowel
//I am going to check using and if and else if statments and check if my argument is === to my string 
//I am goig to log the first letter  vowels: aeiou by using the indexOf() by passing the letter in the indexOf() 
// by passing the letter in the indexOf(e),  ndexOf(a)  and ndexOf(a) 



// // a) Create a test with expect statements for each of the variables provided.


fdescribe("firstVowel ", () => {
    var vowelTester1 = "learn"
    // Expected output: 1
    var vowelTester2 = "academy"
    // Expected output: 0
    var vowelTester3 = "challenge"
    // Expected output: 2
    it("returns 'first vowel in each word'", () => {
      expect(firstVowel (vowelTester1)).toEqual(1)
      expect(firstVowel (vowelTester2)).toEqual(0)
      expect(firstVowel (vowelTester3)).toEqual(2)
    })
  })


// b) Create the function that makes the test pass.
//this is all my code I thought this is all I had to do but it did not pass
// vowels: aeiou
// const firstVowel = (vowel) => {
//     if(vowel ==="learn"){
//         return indexOf("e")
//     }else if(vowel === "academy"){

//         return indexOf("a")
//     }else if(vowel === "challenge"){
//         return indexOf("a")
//     }
//   }



// From this line on I had help on a study group I had with my class mate and he told me why what I did would not work and why this would work. so now I understand when using the || operator is say as soon as you find the first index, go ahed and log it's index and ignor the rest.
const firstVowel = (vowel) => {
    for(let i = 0; i<vowel.length; i++){
        if(vowel[i] === "a" || vowel[i] === "e" || vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u")
        return i
    }
}