let i = 0;

while (true) {
    let playerMove = prompt("Enter rock, paper, scissors");

    if (playerMove === null) break;

    playerMove = playerMove.toLowerCase();

    let value = Math.random();
    let computerMove;

    if (value <= 0.33) {
        computerMove = "rock";
    } else if (value <= 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    if (
        playerMove !== "rock" &&
        playerMove !== "paper" &&
        playerMove !== "scissors"
    ) {
        alert("Invalid input. Try again.");
        continue;
    }

    let result;

    if (playerMove === computerMove) {
        result = "Tie";
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) {
        result = "Player Won";
    } else {
        result = "Computer Won";
    }

    alert(`Player: ${playerMove} | Computer: ${computerMove} | ${result}`);

    let Ask = prompt("Do you want to continue? (y/n)");

    if (Ask === "n") {
        break;
    }

    i++;
}