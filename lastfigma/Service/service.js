const USLUGI_PRODAZHA = [
    {
        kartinka: "./photo/Icon Container (8).png", nazvanie: "Valuation Mastery", opisanie: "Discover the true worth of your property with our expert valuation services."
    },
    {
        kartinka: "./photo/Icon Container (9).png", nazvanie: "Strategic Marketing", opisanie: "Selling a property requires more than just a listing; it demands a strategic marketing approach."
    },
    {
        kartinka: "./photo/Icon Container (10).png", nazvanie: "Negotiation Wizardry", opisanie: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
    },
    {
        kartinka: "./photo/Icon Container (11).png", nazvanie: "Closing Success", opisanie: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    }
]

const verhProdazhi = document.getElementById('uslugi-verh');
const nizProdazhi = document.getElementById('uslugi-niz');
if (verhProdazhi && nizProdazhi) {
    const kartochkiVerh = USLUGI_PRODAZHA.slice(0, 3);
    const kartochkiNiz = USLUGI_PRODAZHA.slice(3, 4);
    verhProdazhi.innerHTML = kartochkiVerh.map(
        punkt => `<div class="usluga-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>`
    ).join('');
    nizProdazhi.innerHTML = kartochkiNiz.map(
        punkt => `<div class="usluga-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>
        <div class="usluga-banner">
                <div>
                    <h2>Unlock the Value of Your Property Today</h2>
                    <button>Learn More</button>
                </div>
                <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            </div>`
    ).join('')
}

const USLUGI_UPRAVLENIE = [
    {
        kartinka: "./photo/Icon Container (12).png", nazvanie: "Tenant Harmony", opisanie: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
    },
    {
        kartinka: "./photo/Icon Container (13).png", nazvanie: "Maintenance Ease", opisanie: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
    },
    {
        kartinka: "./photo/Icon Container (14).png", nazvanie: "Financial Peace of Mind", opisanie: "Managing property finances can be complex. Our financial experts take care of rent collection"
    },
    {
        kartinka: "./photo/Icon Container (15).png", nazvanie: "Legal Guardian", opisanie: "Stay compliant with property laws and regulations effortlessly.",
    }
]

const verhUpravleniya = document.getElementById('upravlenie-verh');
const nizUpravleniya = document.getElementById('upravlenie-niz');
if (verhUpravleniya && nizUpravleniya) {
    const kartochkiVerh = USLUGI_UPRAVLENIE.slice(0, 3);
    const kartochkiNiz = USLUGI_UPRAVLENIE.slice(3, 4);
    verhUpravleniya.innerHTML = kartochkiVerh.map(
        punkt => `<div class="upravlenie-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>`
    ).join('');
    nizUpravleniya.innerHTML = kartochkiNiz.map(
        punkt => `<div class="upravlenie-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>
        <div class="upravlenie-banner">
                <div>
                    <h2>Experience Effortless Property Management</h2>
                    <button>Learn More</button>
                </div>
                <p>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            </div>`
    ).join('')
}

const USLUGI_INVESTICII = [
    {
        kartinka: "./photo/Icon Container (8).png", nazvanie: "Market Insight", opisanie: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
    },
    {
        kartinka: "./photo/Icon Container (17).png", nazvanie: "ROI Assessment", opisanie: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
    },
    {
        kartinka: "./photo/Icon Container (16).png", nazvanie: "Customized Strategies", opisanie: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
    },
    {
        kartinka: "./photo/Icon Container (3).png", nazvanie: "Diversification Mastery", opisanie: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    }
]

const verhInvesticij = document.getElementById('investicii-verh');
const nizInvesticij = document.getElementById('investicii-niz');
if (verhInvesticij && nizInvesticij) {
    const kartochkiVerh = USLUGI_INVESTICII.slice(0, 2);
    const kartochkiNiz = USLUGI_INVESTICII.slice(2, 4);
    verhInvesticij.innerHTML = kartochkiVerh.map(
        punkt => `<div class="investicii-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>`
    ).join('');
    nizInvesticij.innerHTML = kartochkiNiz.map(
        punkt => `<div class="investicii-kartochka">
            <div>
                <img src="${punkt.kartinka}" alt="">
                <h2>${punkt.nazvanie}</h2>
            </div>
            <p>${punkt.opisanie}</p>
        </div>`
    ).join('')
}