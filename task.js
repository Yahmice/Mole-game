document.addEventListener("DOMContentLoaded", () => {
    let winCount = 0,
      loseCount = 0,
      maxWins = 10,
      maxLoses = 5;
  
    const winCountDisplay = document.getElementById('dead'),
      loseCountDisplay = document.getElementById('lost'),
      holes = document.querySelectorAll('.hole');
  
    const updateScore = () => {
      winCountDisplay.textContent = winCount;
      loseCountDisplay.textContent = loseCount;
    };
  
    const resetGame = () => {
      winCount = 0;
      loseCount = 0;
      updateScore();
    };
  
    holes.forEach(hole => {
      hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
          winCount++;
          if (winCount >= maxWins) {
            alert('Вы победили!');
            resetGame();
          }
        } else {
          loseCount++;
          if (loseCount >= maxLoses) {
            alert('Игра окончена! Вы проиграли.');
            resetGame();
          }
        }
        updateScore();
      });
    });
  });
  