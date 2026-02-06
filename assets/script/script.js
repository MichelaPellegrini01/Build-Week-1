let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", () => {
  if (!document.querySelector("#disclaimer").checked) {
    alert(`Spunta la "promessa" per poter proseguire`);
  } else {
    window.location.href = "quiz.html";
  }
});
