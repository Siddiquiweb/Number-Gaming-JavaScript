// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');

// Initialize variables
let guessCount = 0;
let guess;

function checkGuess() {
    // Convert the guess to a number
    guess = parseInt(guessField.value);

    // Increment guess count
    guessCount++;

    // Check if the guess is correct
    if (guess === randomNumber) {
        showMessage(`Congratulations! You guessed the number ${randomNumber} in ${guessCount} guesses.`);
        gameOver();
    } else if (guessCount === 10) {
        showMessage(`Game over! The number was ${randomNumber}.`);
        gameOver();
    } else {
        if (guess < randomNumber) {
            showMessage(`Try higher!`);
        } else {
            showMessage(`Try lower!`);
        }
    }

    // Clear the input field
    guessField.value = '';
}

function showMessage(msg) {
    message.textContent = msg;
}

function gameOver() {
    // Disable input field and submit button
    guessField.disabled = true;
    submitButton.disabled = true;
}