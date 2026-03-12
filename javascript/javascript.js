// Maak de kaart aan
var map = L.map('map').setView([52.3, 5.3], 8);

// Achtergrondkaart
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© CartoDB'
}).addTo(map);

// WFS-url: vraag musea op als GeoJSON
var wfsUrl = "https://services.rce.geovoorziening.nl/Veiligheid_van_Erfgoed/wfs"
    + "?SERVICE=WFS"
    + "&VERSION=2.0.0"
    + "&REQUEST=GetFeature"
    + "&TYPENAMES=Veiligheid_van_Erfgoed:overzichtmusea"
    + "&OUTPUTFORMAT=application/json"
    + "&SRSNAME=EPSG:4326";

// Haal de data op en toon op kaart
fetch(wfsUrl)
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#411111",
                    color: "#411111",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function(feature, layer) {
                if (feature.properties) {
                    var inhoud = "";
    for (var sleutel in feature.properties) {
        inhoud += "<b>" + sleutel + ":</b> " + feature.properties[sleutel] + "<br>";
    }
    layer.bindPopup(inhoud);
                }
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error("Fout bij laden WFS:", error);
    });