// Messaggi di conforto
const messages = [
  "Sono fiero di te ❤️",
  "Un passo alla volta.",
  "Non devi affrontare tutto da sola.",
  "Sei importante per me.",
  "Anche oggi ce la puoi fare.",
  "Ti voglio un bene infinito ❤️"
];

// Animazione quando tocchi una card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.96)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);

    alert(messages[Math.floor(Math.random() * messages.length)]);
  });
});
