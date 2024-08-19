// Declaring value
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("Guess");

const submit = document.getElementById("submit");

const hint = document.getElementById("hints");

const attemptText = document.getElementById("Attempts");

//Event Listeners
submit.addEventListener("click", checkguess);

function checkguess() {
const userValue = Number(guess.value);
attempts++; 
// Conditionals
if (userValue === randomNum) {
    hint.textContent = "Congratulations you guessed it!";
}else if (userValue < randomNum){
    hint.textContent = "Too low try again.";
}else {
    hint.textContent =("Too high, try again.");
    attemptText.textContent = "Attempt:" + attempts;
}
}
