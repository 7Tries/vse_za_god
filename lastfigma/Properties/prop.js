const NEDVIZHIMOST = [
    {
        foto: "./photo/Image.png", 
        nazvanie: "Seaside Serenity Villa", 
        opisanie: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <span>Read More</span>", 
        spalni: "4-Bedroom", 
        vannye: "3-Bathroom", 
        tip: "Villa", 
        metka: "Price", 
        cena: "$1.250.000", 
        knopka: "View Property Details"
    },
    {
        foto: "./photo/Image (1).png", 
        nazvanie: "Metropolitan Haven", 
        opisanie: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... <span>Read More</span>", 
        spalni: "2-Bedroom", 
        vannye: "2-Bathroom", 
        tip: "Villa", 
        metka: "Price", 
        cena: "$650.000", 
        knopka: "View Property Details"
    },
    {
        foto: "./photo/Image (2).png", 
        nazvanie: "Rustic Retreat Cottage", 
        opisanie: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <span>Read More</span>", 
        spalni: "3-Bedroom", 
        vannye: "3-Bathroom", 
        tip: "Villa", 
        metka: "Price", 
        cena: "$350.000", 
        knopka: "View Property Details"
    },
];

const konteynerNedvizh = document.getElementById('spisok-nedvizh');
konteynerNedvizh.innerHTML = NEDVIZHIMOST.map(
    obekt => `<div class="nedvizh-kartochka">
                <img src="${obekt.foto}" alt="${obekt.nazvanie}">
                <h2>${obekt.nazvanie}</h2>
                <p>${obekt.opisanie}</p>
                <div class="nedvizh-harakteristiki">
                    <span>${obekt.spalni}</span>
                    <span>${obekt.vannye}</span>
                    <span>${obekt.tip}</span>
                </div>
                <div class="nedvizh-niz"> 
                    <div class="nedvizh-cena">
                        <p>${obekt.metka}</p>
                        <h3>${obekt.cena}</h3>
                    </div>
                    <button class="nedvizh-podrobno">${obekt.knopka}</button>
                </div>
            </div>`,
    ).join('');