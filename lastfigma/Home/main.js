const NEDVIZHIMOST = [
    {
        foto: "./photo/Image.png", 
        nazvanie: "Seaside Serenity Villa", 
        opisanie: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <span>Read More</span>", 
        spalni: "4-Bedroom", 
        vannye: "3-Bathroom", 
        tip: "Villa", 
        metka: "Price", 
        cena: "$550.000", 
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
        cena: "$550.000", 
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
        cena: "$550.000", 
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


const OTZYVY = [
    {
        zvezdy: "./photo/Container (2).png", 
        zagolovok: "Exceptional Service!", 
        tekst: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        avtorFoto: "./photo/Profile.png", 
        avtorImya: "Wade Warren", 
        avtorMesto: "USA, California"
    },
    {
        zvezdy: "./photo/Container (2).png", 
        zagolovok: "Efficient and Reliable", 
        tekst: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        avtorFoto: "./photo/Profile (1).png", 
        avtorImya: "Emelie Thomson", 
        avtorMesto: "USA, Florida"
    },
    {
        zvezdy: "./photo/Container (2).png", 
        zagolovok: "Trusted Advisors", 
        tekst: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
        avtorFoto: "./photo/Profile (2).png", 
        avtorImya: "John Mans", 
        avtorMesto: "USA, Nevada"
    },
];

const konteynerOtzyvov = document.getElementById('spisok-otzyvov');
konteynerOtzyvov.innerHTML = OTZYVY.map(
    otzyv => `<div class="otzyv-kartochka">
                <img class="otzyv-zvezdy" src="${otzyv.zvezdy}" alt="Stars">
                <h2>${otzyv.zagolovok}</h2>
                <p>${otzyv.tekst}</p>
                <div class="otzyv-avtor">
                    <img src="${otzyv.avtorFoto}" alt="${otzyv.avtorImya}">
                    <div class="avtor-dannie">
                        <span class="avtor-imya">${otzyv.avtorImya}</span>
                        <span class="avtor-mesto">${otzyv.avtorMesto}</span>
                    </div>
                </div>
            </div>`,
    ).join('');


const FAQ = [
    {
        vopros: "How do I search for properties on Estatein?", 
        otvet: "Learn how to use our user-friendly search tools to find properties that match your criteria.", 
        knopka: "Read More"
    },
    {
        vopros: "What documents do I need to sell my property through Estatein?", 
        otvet: "Find out about the necessary documentation for listing your property with us.", 
        knopka: "Read More"
    },
    {
        vopros: "How can I contact an Estatein agent?", 
        otvet: "Discover the different ways you can get in touch with our experienced agents.", 
        knopka: "Read More"
    },
];

const konteynerVoprosov = document.getElementById('spisok-voprosov');
konteynerVoprosov.innerHTML = FAQ.map(
    vopros => `<div class="vopros-kartochka">
                <h2>${vopros.vopros}</h2>
                <p>${vopros.otvet}</p>
                <button class="vopros-knopka">${vopros.knopka}</button>
            </div>`,
    ).join('');