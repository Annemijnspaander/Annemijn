function nieuweQuote(){

const quotes = [
"You must find the courage to prioritise your art.",
"Art is a feeling.",
"To make living itself an art, that is the goal.",
"You are way to creative for a 9 to 5.",
"Do epic shit."
];

let random = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText = quotes[random];

}
