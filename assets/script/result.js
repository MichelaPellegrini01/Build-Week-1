window.addEventListener("load", () => {
  let punteggioFinale = localStorage.getItem("score");
  let punteggioContainer = document.querySelector(".punteggio");
  let textToShow;
  if (punteggioFinale < 6) {
    textToShow = `Non hai superato il test! \nHai totalizzato ${punteggioFinale} punti`;
  } else {
    textToShow = `CONGRATULAZIONI! Hai superato il test! \nHai totalizzato ${punteggioFinale} punti`;
  }
  punteggioContainer.textContent = textToShow;
});
