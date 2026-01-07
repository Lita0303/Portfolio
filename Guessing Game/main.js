var  secret = Math.floor(Math.random() * 20) + 1;

var guess = parseInt(prompt("Please guess the secret number (1-20)"));

while (guess !== secret) {
    if (guess < secret) {
        alert("Incorrect, too low");
    } else if (guess > secret) {
        alert("Incorrect, too high");
    }
    guess = parseInt(prompt("Try again (1-20)"));
}

alert("Correct Guess!");