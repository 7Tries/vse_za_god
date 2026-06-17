const SHAGI = [
    {nomer: "Step 01", nazvanie: "Discover a World of Possibilities", opisanie: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."},
    {nomer: "Step 02", nazvanie: "Narrowing Down Your Choices", opisanie: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."},
    {nomer: "Step 03", nazvanie: "Personalized Guidance", opisanie: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."},
    {nomer: "Step 04", nazvanie: "See It for Yourself", opisanie: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."},
    {nomer: "Step 05", nazvanie: "Making Informed Decisions", opisanie: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."},
    {nomer: "Step 06", nazvanie: "Getting the Best Deal", opisanie: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."},
];

const konteynerEtapov = document.getElementById('spisok-etapov');
konteynerEtapov.innerHTML = SHAGI.map(
    punkt => `<div class="etap">
                <div class="etap-nomer">
                <h3>${punkt.nomer}</h3>
                </div>
                <div class="etap-soderzhanie">
                    <h2>${punkt.nazvanie}</h2>
                    <p>${punkt.opisanie}</p>
                </div>
            </div>`,
    ).join('');


const LYUDI = [
    {foto: "./photo/Image.png", imya: "Max Mitchell", rol: "Founder", knopka: "Say Hello"},
    {foto: "./photo/Image (1).png", imya: "Sarah Johnson", rol: "Chief Real Estate Officer", knopka: "Say Hello"},
    {foto: "./photo/Image (2).png", imya: "David Brown", rol: "Head of Property Management", knopka: "Say Hello"},
    {foto: "./photo/Image (3).png", imya: "Michael Turner", rol: "Legal Counsel", knopka: "Say Hello"},
];

const konteynerKomandy = document.getElementById('spisok-komandy');
konteynerKomandy.innerHTML = LYUDI.map(
    chelovek => `<div class="sotrudnik">
                <div class="sotrudnik-foto">
                <img class="fotik" src="${chelovek.foto}" alt="${chelovek.imya}">
                </div>
                <div class="sotrudnik-info">
                    <h3>${chelovek.imya}</h3>
                    <p>${chelovek.rol}</p>
                </div>
                <div class="sotrudnik-knopka">
                    <button class="privet">${chelovek.knopka}</button>
                </div>
            </div>`,
    ).join('');