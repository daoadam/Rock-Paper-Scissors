
// Create two player scores
let playerScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector('.outcome'); // Use querySelector for a single element
const currentRound = document.querySelector('.current-round'); // Select by class
const runningScore = document.querySelector('.running-score'); // Select by class
const winner = document.querySelector('.winner'); // Select by class

// Computer choice function
function computerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index]; // Return the actual choice
}

// Play a single round
function playRound(playerSelection) {
    const computerSelection = computerChoice();

    if (playerSelection === computerSelection) {
        currentRound.textContent = `It's a tie! You both chose ${playerSelection}`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        currentRound.textContent = `You won this round! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        currentRound.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}`;
    }

    // Update running score
    runningScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    // Check for a winner
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            winner.textContent = "Congratulations, you've won the game!";
        } else {
            winner.textContent = "Unfortunately, you lost the game!";
        }
        disableButtons(); // Disable buttons after the game ends
    }
}

// Disable buttons after game ends
function disableButtons() {
    document.querySelectorAll('.button').forEach(button => {
        button.style.pointerEvents = 'none';
        button.style.opacity = '0.5';
    });
}

// Add event listeners to buttons
document.querySelector('.rock').addEventListener('click', () => playRound('Rock'));
document.querySelector('.paper').addEventListener('click', () => playRound('Paper'));
document.querySelector('.scissors').addEventListener('click', () => playRound('Scissors'));
