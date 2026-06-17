const OFISY = [
    {
        tip: "Main Headquarters", 
        nazvanie: "123 Estatein Plaza, City Center, Metropolis", 
        opisanie: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.", 
        pochta: "info@estatein.com", 
        telefon: "+1 (123) 456-7890", 
        gorod: "Metropolis"
    },
    {
        tip: "Regional Offices", 
        nazvanie: "456 Urban Avenue, Downtown District, Metropolis", 
        opisanie: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        pochta: "info@restatein.com", 
        telefon: "+1 (123) 628-7890", 
        gorod: "Metropolis"
    }
];

const konteynerOfisov = document.getElementById('ofisy-kartochki');
if (konteynerOfisov) {
    const ofisyDlyaPokaza = OFISY.slice(0, 2);
    konteynerOfisov.innerHTML = ofisyDlyaPokaza.map(
        ofis => `<div class="ofis-kartochka">
                <span class="ofis-metka">${ofis.tip}</span>
                <h2>${ofis.nazvanie}</h2>
                <p>${ofis.opisanie}</p>
                <div class="ofis-kontakty">
                    <div class="ofis-sposob">
                        <img src="../Assets/c334.png" alt="Email">
                        <span>${ofis.pochta}</span>
                    </div>
                    <div class="ofis-sposob">
                        <img src="../Assets/c333.png" alt="Phone">
                        <span>${ofis.telefon}</span>
                    </div>
                    <div class="ofis-sposob">
                        <img src="../Assets/loc.png" alt="Location">
                        <span>${ofis.gorod}</span>
                    </div>
                </div>
                <button class="marshrut">Get Direction</button>
            </div>`
    ).join('');
}

const FOTO = [
    {
        foto1: "./photo/Image (4).png", 
        foto2: "./photo/Image (5).png", 
        foto3: "./photo/Image (6).png", 
        foto4: "./photo/Image (7).png", 
        foto5: "./photo/Image (8).png", 
        foto6: "./photo/Image (9).png",
    },
];

const konteynerGallerei = document.getElementById('gallereya-konteyner');
if (konteynerGallerei) {
    const fotoDlyaPokaza = FOTO.slice(0, 1);
    konteynerGallerei.innerHTML = fotoDlyaPokaza.map(
        snimok => `<div class="gallereya-konteyner">
            <div class="gallereya-verh">
                <img src="${snimok.foto1}" alt="Gallery 1">
                <img src="${snimok.foto2}" alt="Gallery 2">
            </div>
            <div class="gallereya-centr">
                <img src="${snimok.foto3}" alt="Gallery 3">
                <div class="gallereya-dvojka">
                    <img src="${snimok.foto4}" alt="Gallery 4">
                    <img src="${snimok.foto5}" alt="Gallery 5">
                </div>
            </div>
            <div class="gallereya-niz">
                <div class="gallereya-tekst">
                    <img class="zvezda" src="../Assets/Abstract Design.png" alt="Decor">
                    <h1>Explore Estatein's World</h1>
                    <p>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                </div>
                <img src="${snimok.foto6}" alt="Gallery 6">
            </div>
        </div>`
    ).join('');
}