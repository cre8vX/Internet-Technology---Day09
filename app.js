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

import { getText } from "./sum.js";

let text = getText();
console.log(text);