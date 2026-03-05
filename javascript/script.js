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