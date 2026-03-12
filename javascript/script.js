window.addEventListener('scroll', function () {
  const definitie = document.querySelector('.art-definitie');
  const tekst = document.querySelector('.art-tekst');
  if (!definitie || !tekst) return;

  const rect = definitie.getBoundingClientRect();
  const total = definitie.offsetHeight;

  // Hoe ver zijn we door de .art-definitie sectie gescrold? (0 = begin, 1 = eind)
  const progress = -rect.top / total;

  // Tekst zichtbaar tussen 30% en 70% van de sectie
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

function toonInfo(periode){

let tekst = "";

if(periode === "renaissance"){
tekst = "De renaissance begon rond 1400 en betekende een herontdekking van de klassieke kunst uit de oudheid.";
}

else if(periode === "barok"){
tekst = "De barok stond bekend om dramatische schilderijen, sterke contrasten en veel beweging.";
}

else if(periode === "romantiek"){
tekst = "De romantiek legde meer nadruk op gevoel, natuur en emotie in kunst.";
}

else if(periode === "modernisme"){
tekst = "Het modernisme brak met traditionele regels en experimenteerde met nieuwe vormen.";
}

else if(periode === "hedendaags"){
tekst = "Hedendaagse kunst gebruikt vaak nieuwe materialen, technologie en conceptuele ideeën.";
}

document.getElementById("timeline-info").innerText = tekst;

}

