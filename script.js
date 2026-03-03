// Get elements
const resultMessage = document.getElementById('resultMessage');
const choiceBtns = document.querySelectorAll('.choice-btn');
const playAgainBtn = document.getElementById('playAgain');

// Game state
let playing = true;

// Computer move generator (YOUR ORIGINAL LOGIC)
function getComputerMove() {
    let value = Math.random();
    let computerMove;
    
    if (value <= 0.33) {
        computerMove = "rock";
    } else if (value <= 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
    
    return computerMove;
}

// Game logic (YOUR ORIGINAL LOGIC - just adapted for UI)
function playGame(playerMove) {
    if (!playing) return;
    
    let computerMove = getComputerMove();
    let result = "";
    
    // YOUR EXACT IF-ELSE LOGIC
    if (playerMove === computerMove) {
        result = `Player: ${playerMove} | Computer: ${computerMove} | Tie!`;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        result = `Player: ${playerMove} | Computer: ${computerMove} | Player won!`;
    } else if (playerMove === "paper" && computerMove === "rock") {
        result = `Player: ${playerMove} | Computer: ${computerMove} | Player won!`;
    } else if (playerMove === "scissors" && computerMove === "paper") {
        result = `Player: ${playerMove} | Computer: ${computerMove} | Player won!`;
    } else {
        result = `Player: ${playerMove} | Computer: ${computerMove} | Computer won!`;
    }
    
    resultMessage.textContent = result;
}

// Handle choice buttons
choiceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let move = this.getAttribute('data-move');
        playGame(move);
    });
});

// Reset game
playAgainBtn.addEventListener('click', function() {
    resultMessage.textContent = "Click a button to play!";
});