// let greetings = "ciao"
// let numberA= 0
// let numberB = 2
// let myNumber= "1"

// let greetNumber = greetings + numberA

// let sum = numberA / numberB
// let sumB = numberB + myNumber

// console.log(greetings)
// console.log(numberA)
// console.log(greetNumber)
// console.log(sum)

// let number = 2
// number += 1

// console.log(number)

const BUTTON = document.getElementById("button");
const BOX = document.getElementById("result");
const INPUT = document.getElementById("userInput");

let number = 0;

BUTTON.addEventListener("click", () =>{

    // number += 1;
    // console.log(number)
    // BOX.innerHTML = number;

    let userInput = INPUT.value;
    console.log(userInput)
    BOX.innerHTML = userInput;

})
