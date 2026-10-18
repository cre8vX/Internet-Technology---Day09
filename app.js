// function sendPromptOnAction() {
//     //alert("Hi!")
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("X-goog-api-key", "Your API Key Here");

//     let userInput = document.getElementById("txtUserInput").value;

//     const raw = JSON.stringify({
//         "contents": [
//             {
//                 "parts": [
//                     {
//                         "text": userInput
//                     }
//                 ]
//             }
//         ]
//     });

//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//     };

//     fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             document.getElementById("lblResponce").innerHTML = markdown.default(result.candidates[0].content.parts[0].text);
//         })
//         .catch((error) => console.error(error));
// }

import sum from "./sum.js";

let numSum = sum(10, 5);
console.log(numSum);

//------------------------------

// import { getText } from "./sum.js";

// let text = getText();
// console.log(text);

//------------------------------
// import { subtract } from "./sum.js";
// let numSubtract = subtract(10, 5);
// console.log(numSubtract);

// import { multiply } from "./sum.js";
// let numMultiply = multiply(10, 5);
// console.log(numMultiply);

// import { divide } from "./sum.js";
// let numDivide = divide(10, 5);
// console.log(numDivide);

// const name = "Elon Musk";
// console.log(name);

//------------------------------
import { subtract, multiply, divide, name } from "./sum.js";

let numSubtract = subtract(10, 5);
console.log(numSubtract);

let numMultiply = multiply(10, 5);
console.log(numMultiply);


let numDivide = divide(10, 5);
console.log(numDivide);

console.log(name);

//------------------------------
import Student from "./Student.js";

let student1 = new Student("Saman Kumara", 20, "A");
console.log(student1.name, student1.age, student1.grade);
