window.addEventListener('scroll', function () {
  const definitie = document.querySelector('.art-definitie');
  const tekst = document.querySelector('.art-tekst');
  if (!definitie || !tekst) return;

  const rect = definitie.getBoundingClientRect();
  const total = definitie.offsetHeight;

  const progress = -rect.top / total;

  if (progress > 0.3 && progress < 0.7) {
    const opacity = Math.min((progress - 0.3) / 0.15, 1) * Math.min((0.7 - progress) / 0.1, 1);
    tekst.style.opacity = opacity;
  } else {
    tekst.style.opacity = 0;
  }
});

// Quotes generator:
function nieuweQuote() {
  const quotes = [
    "You must find the courage to prioritise your art.",
    "Art is a feeling.",
    "To make living itself an art, that is the goal.",
    "You are way to creative for a 9 to 5.",
    "Do epic shit.",
    "Yahoo",
    "boehoe",
  ];

  let random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[random];
}


