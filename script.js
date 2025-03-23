let moneyWon = 0;
let moneyLost = 0;

document.getElementById("bidButton").addEventListener("click", () => {
    const bidInput = document.getElementById("bidInput");
    const resultDiv = document.getElementById("result");
    const statsDiv = document.getElementById("stats");
    const bidAmount = parseFloat(bidInput.value);

    resultDiv.classList.remove("error");

    if (isNaN(bidAmount) || bidAmount <= 0) {
        resultDiv.textContent = "Please enter a valid bid amount.";
        resultDiv.classList.add("error");
        return;
    }

    // 10% chance to win
    if (Math.random() < 0.10) {
        const winAmount = bidAmount * 10;
        moneyWon += winAmount;
        resultDiv.textContent = "YOU WON $" + winAmount.toFixed(2) + "!";
        
        // Display current session statistics
        alert("Money Won: $" + moneyWon.toFixed(2) + " | Money Lost: $" + moneyLost.toFixed(2) + " | Net Result: $" + (moneyWon - moneyLost).toFixed(2));

        // Reset session statistics
        moneyWon = 0;
        moneyLost = 0;
    } else {
        moneyLost += bidAmount;
        resultDiv.textContent = "Sorry, better luck next time.";
    }

    statsDiv.textContent = "Money Won: $" + moneyWon.toFixed(2) + " | Money Lost: $" + moneyLost.toFixed(2) + " | Net Result: $" + (moneyWon - moneyLost).toFixed(2);
});
