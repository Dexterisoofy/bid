const bidButton = document.getElementById("bidButton");
let totalMoneyWon = 0;
let totalMoneyLost = 0;

bidButton.addEventListener("click", () => {
  const bidInput = document.getElementById("bidInput");
  const resultDiv = document.getElementById("result");
  const moneyWonDiv = document.getElementById("moneyWon");
  const moneyLostDiv = document.getElementById("moneyLost");
  const netResultDiv = document.getElementById("netResult");

  const bidAmount = parseFloat(bidInput.value);
  resultDiv.classList.remove("error");

  // Validate input
  if (isNaN(bidAmount) || bidAmount < 0.01) {
    resultDiv.textContent = "Please enter a valid bid amount.";
    resultDiv.classList.add("error");
    return;
  }

  // Generate a random number between 0 and 1.
  // If it's below 0.10, the bid is multiplied by 5.
  if (Math.random() < 0.10) {
    const winAmount = bidAmount * 5;
    totalMoneyWon += winAmount;
    resultDiv.textContent = "YOU WON $" + winAmount.toFixed(2) + "!";
  } else {
    totalMoneyLost += bidAmount;
    resultDiv.textContent = "Sorry, better luck next time.";
  }

  const netAmount = totalMoneyWon - totalMoneyLost;
  moneyWonDiv.textContent = "Total Money Won: $" + totalMoneyWon.toFixed(2);
  moneyLostDiv.textContent = "Total Money Lost: $" + totalMoneyLost.toFixed(2);
  netResultDiv.textContent = "Net Result: $" + netAmount.toFixed(2);
});
