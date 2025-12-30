// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/nyår2026', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp|gif)$/));
  

export default [
 
    {
        label: "Nyår 2026",
        category: "I backspegeln",
        questions: [
            {
                id: 1,
                level: 100,
                question: "Detta livsmedel slog rekord i prisdiskusioner i Sverige och blev nästan en symbol för inflationen.",
                answer: "Vad är kaffe?",
                image: images["kaffe.jpg"],
                imageSource: "Image by Mike Kenneally on Unsplash"
            },
            {
                id: 2,
                level: 200,
                question: "I år var musikhjälpen i Karlstad och de hade detta som årets tema.",
                answer: "Vad är 'Alla barn har rätt att gå i skolan'?",
                image: images['musikhjalpen.jpeg'],
                imageSource: "Image from musikhjalpen on Instagram"
            },
            {
                id: 3,
                level: 300,
                question: "Denna 'reality-TV-stjärna' gjorde 'You're fired!' till ett politiskt hot igen.",
                answer: "Vem är Donald Trump?",
                image: images["trump.webp"],
                imageSource: "Image by edlines.co"
            },
            {
                id: 4,
                level: 400,
                question: "Katy Perry åkte på en livsomvälvande rymdresa på ca 11 min med detta rymdbolag grundat av Jeff Besos.",
                answer: "Vad är Blue Origin?",
                image: images["blueorigin.jpg"],
                imageSource: "Image from icirnigeria.org"
            },
            {
                id: 5,
                level: 500,
                question: "Detta ska vara ett levande och användbart verktyg för bildning, gemenskap och inkludering i Sverige, vars lista presenterades 2025.",
                answer: "Vad är kulturkanon?",
                image: images["kulturkanon.png"],
                imageSource: "Image from magasinetkonkret.se"
            },
        ],
    },
    {
        category: "Ordnytt och annat babbel",
        questions: [
            {
                id: 6,
                level: 100,
                question: "Ett nonsensord som alla förknippar med toalett.",
                answer: "Vad är skibidi?",
                image: images["skibidi.jpg"],
                imageSource: "Image from edition.cnn.com"
            },
            {
                id: 7,
                level: 200,
                question: "Budskap eller yttrande som avsiktligt provocerar mottagare för att väcka starka känslor och därigenom öka spridning och engagemang.",
                answer: "Vad är ragebait?",
                image: images["ragebait.jpeg"],
                imageSource: "Image from shone.gg on Instagram"
            },
            {
                id: 8,
                level: 300,
                question: "Dunkappa som går ned över knäna och oftast bärs av kvinnor.",
                answer: "Vad  är mammakorv?",
                image: images["mammakorv.png"],
                imageSource: "Image from svd.com"
            },
            {
                id: 9,
                level: 400,
                question: "Tull som införs som svar på en tull eller ett handelshinder från ett annat land.",
                answer: "Vad är hämndtull?",
                image: images["hamndtull.jpeg"],
                imageSource: "Image from omniekonomi.se"
            },
            {
                id: 10,
                level: 500,
                question: "Försvagning av den intellektuella förmågan som framför allt orsakas av upprepad exponering för trivialt innehåll på sociala medier.",
                answer: "Vad är hjärnröta?",
                image: images["brainrot.webp"],
                imageSource: "Image from shutterstock"
            },
        ],
    },
    {
        category: "Ur högtalarna",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Denna artist spelade på Super Bowl Halftime Show.",
                answer: "Vem är Kendrick Lamar?",
                image: images["kendrick.jpeg"],
                imageSource: "Image from nepm.org"
            },
            {
                id: 12,
                level: 200,
                question: "I Sverige 2025 blev denna låt årets mest spelade enligt Spotify.",
                answer: "Vad är Bara bada bastu (av KAJ)?",
                image: images["kaj.jpg"],
                imageSource: "Image from Kaj Facebook"
            },
            {
                id: 13,
                level: 300,
                question: "Denna grupp toppade 2025 listan över mest spelade artister i Sverige.",
                answer: "Vilka är Hov1?",
                image: images["hov1.jpg"],
                imageSource: "Image from 8sidor.se"
            },
            {
                id: 14,
                level: 400,
                question: "Denna artist vann flest priser vid American Music Awards 2025, med hela 7 stycken.",
                answer: "Vem är Billie Eilish?",
                image: images["billieeilish.jpeg"],
                imageSource: "Image from fabutainment on Instagram"
            },
            {
                id: 15,
                level: 500,
                question: "Denna K-popgrupp blev den första någonsin att få åtta raka listettor på Billboard 200 och slog därmed ett 70-årigt rekord.",
                answer: "Vilka är Stray Kids?",
                image: images["straykids.jpeg"],
                imageSource: "Image from billboard on Instagram"
            },
        ],
    },
    {
        category: "Nyhet på kartan",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Staden som aldrig sover, där hyran är orimlig hög och den associeras till ett stort äpple.",
                answer: "Vad är New York?",
                image: images["newyork.webp"],
                imageSource: "Image from checkpointtravel.se"
            },
            {
                id: 17,
                level: 200,
                question: "Denna stad blev Indiens huvudstad efter att Calcutta förlorade den rollen under det brittiska styret.",
                answer: "Vad är New Delhi?",
                image: images["newdelhi.webp"],
                imageSource: "Image from getyourguide.se"
            },
            {
                id: 18,
                level: 300,
                question: "Denna stad i norra England delar namn med både en borg, en öl och fler platser än någon rimligen bett om.",
                answer: "Vad är Newcastle?",
                image: images["newcastle.jpg"],
                imageSource: "Image from arrivalguides.com"
            },
            {
                id: 19,
                level: 400,
                question: "Denna stad är känd för jazz, Mardi Gras och en fest som aldrig riktigt tar slut.",
                answer: "Vad är New Orleans?",
                image: images["neworleans.avif"],
                imageSource: "Image from independent.co.uk"
            },
            {
                id: 20,
                level: 500,
                question: "Regionen i USA där pilgrimsfäderna landsteg 1620, Boston Tea Party ägde rum, och allt känns lite brittiskt i efterhand.",
                answer: "Vad är New England?",
                image: images["newengland.jpg"],
                imageSource: "Image from scotsmanguide.com"
            },
        ],
    },
    {
        category: "Trendspaning",
        questions: [
            {
                id: 21,
                level: 100,
                question: "'Inget slår en...'",
                answer: "Vad är Jet 2 holiday?",
                image: images["jet2holiday.webp"],
                imageSource: "Image from abcnews.com"
            },
            {
                id: 22,
                level: 200,
                question: "Uttrycket kommer ursprunglugen från en låt av Skrilla och blev populär genom videoklipp på basketspelaren LaMelo Ball.",
                answer: "Vad är six seven?",
                image: images["67.gif"],
                imageSource: "Image from afr.com"
            },
            {
                id: 23,
                level: 300,
                question: "Denna designfigur från Pop Mart började små som stora plötsligt att samla på som om det vore Pokémon.",
                answer: "Vad är Labubu?",
                image: images["labubu.jpeg"],
                imageSource: "Image from gettyimages.com"
            },
            {
                id: 24,
                level: 400,
                question: "Sydney Sweeney var ansiktet utåt i kampanjen “Great Jeans” för detta företag.",
                answer: "Vad är American Eagle?",
                image: images["sydney.jpeg"],
                imageSource: "Image from American Eagle Outfitters Inc on LinkedIn"
            },
            {
                id: 25,
                level: 500,
                question: "Hon var chefredagktör för Vouge i 37 år, men avgick i juni 2025.",
                answer: "Vem är Anna Wintour?",
                image: images["vogue.webp"],
                imageSource: "Image from theguardian.com"
            },
        ],
    },
]