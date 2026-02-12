// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/detlaterbekant', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  
//EXEMPEL
//   {
//     id: 1,
//     level: 100,
//     question: "Detta är Sveriges huvudstad.",
//     answer: "Vad är Stockholm",
//     image: images["stockholm.jpg"], (Valfritt)
//     imageSource: "Bild från Kulturcenter.se" (Valfritt)
// }

export default [
 
    {
        label: "Det låter bekant",
        category: "Små ordspråk, stora städer",
        questions: [
            {
                id: 1,
                level: 100,
                question: "The big apple.",
                answer: "Vad är New York?<br><br>(Hästkapplöpningsterm från 20-talet)",
                image: images["newyork.jpg"],
                imageSource: "Image from redbubble.com"
            },
            {
                id: 2,
                level: 200,
                question: "Sin City",
                answer: "Vad är Las Vegas?<br><br>(Historiska tolerans för legaliserat spelande, lättilgänglig alkohol och utbredd vuxenunderhållning)",
                image: images["sincity.jpg"],
                imageSource: ""
            },
            {
                id: 3,
                level: 300,
                question: "The city of light",
                answer: "Vad är Paris?<br><br>(Första europeiska staden att införa gasbelysning på gatan)",
                image: images["paris.webp"],
                imageSource: "Image from getyourguide.se"
            },
            {
                id: 4,
                level: 400,
                question: "The big smoke",
                answer: "Vad är London?<br><br>(För den tjocka dimman och luftföroreningen 1952)",
                image: images["london.webp"],
                imageSource: "Image from britannica.com"
            },
            {
                id: 5,
                level: 500,
                question: "The city of dreams",
                answer: "Vad är Mumbai?<br><br>(Symboliserar hopp för framgång inom Bollywood, business, fashion)",
                image: images["mumbai.jpg"],
                imageSource: "Image from beontheroad.com"
            },
        ],
    },
    {
        category: "Replikens ursprung",
        questions: [
            {
                id: 6,
                level: 100,
                question: "”May the Force be with you.”",
                answer: "Vad är Star Wars?",
                image: images["starwars.jpg"],
                imageSource: "Image from europosters.se"
            },
            {
                id: 7,
                level: 200,
                question: "”To infinity and beyond!”",
                answer: "Vad är Toy Story?<br><br>(Buzz Lightyear)",
                image: images["toystory.jpg"],
                imageSource: ""
            },
            {
                id: 8,
                level: 300,
                question: "”I am the one who knocks”",
                answer: "Vad är Breaking bad?<br><br>(Walter White - Heisenberg)",
                image: images["breakingbad.webp"],
                imageSource: "Image from tvtropes.org"
            },
            {
                id: 9,
                level: 400,
                question: "”You either die a hero, or you live long enough to see yourself become the villain.”",
                answer: "Vad är The Dark Knight?<br><br>(Harvey Dent - Two-Face)",
                image: images["darkknight.webp"],
                imageSource: "Image from nolan-batman.fandom.com"
            },
            {
                id: 10,
                level: 500,
                question: "”You can't handle the truth”",
                answer: "Vad är A Few Good Men?<br><br>(Colonel Nathan R. Jessup)",
                image: images["fewgoodmen.webp"],
                imageSource: "Image from faroutmagazine.co.uk"
            },
        ],
    },
    {
        category: "Ord som säljer",
        questions: [
            {
                id: 11,
                level: 100,
                question: "”Just do it.”",
                answer: "Vad är Nike?",
                image: images["nike.jpg"],
                imageSource: "Image from hubbestdef.click"
            },
            {
                id: 12,
                level: 200,
                question: "”Because you're worth it”",
                answer: "Vad är L'Oreal?",
                image: images["loreal.jpg"],
                imageSource: "Image from dailymail.co.uk"
            },
            {
                id: 13,
                level: 300,
                question: "”Open happiness”",
                answer: "Vad är Coca-Cola?",
                image: images["cocacola.jpeg"],
                imageSource: ""
            },
            {
                id: 14,
                level: 400,
                question: "”Connecting people”",
                answer: "Vad är Nokia?",
                image: images["nokia.jpg"],
                imageSource: "Image from medium.com"
            },
            {
                id: 15,
                level: 500,
                question: "”Belong anywhere”",
                answer: "Vad är Airbnb?",
                image: images["airbnb.png"],
                imageSource: "Image from thescaleupcollective.com"
            },
        ],
    },
    {
        category: "Disney & Pixar",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Detta är en känd spinoff på 'Bilar'.",
                answer: "Vad är Flygplan (Planes)?",
                image: images["flygplan.jpg"],
                imageSource: ""
            },
            {
                id: 17,
                level: 200,
                question: "Denna Pixar-film har sålt flest DVD-exemplar och hade på sin tid avancerad CGI av vatten och vann Academy Award för Best Animated Feature.",
                answer: "Vad är Hitta Nemo (Finding Nemo)?",
                image: images["hittanemo.jpg"],
                imageSource: ""
            },
            {
                id: 18,
                level: 300,
                question: "Denna Disney-prinsessan är den enda som har en tatuering - som symboliserar hennes koppling till naturen, styrka och ande, utformad för att se ut som eld.",
                answer: "Vem är Pocahontas?",
                image: images["pocahontas.jpg"],
                imageSource: "Image from "
            },
            {
                id: 19,
                level: 400,
                question: "Denna karaktär offrar sig i den mest emotionella scenen i 'Insidan Ut'.",
                answer: "Vem är Bing Bong?",
                image: images["bingbong.webp"],
                imageSource: "Image from "
            },
            {
                id: 20,
                level: 500,
                question: "Denna pizzakedja dyker upp i flera Pixar-filmer.",
                answer: "Vad är Pizza Planet?",
                image: images["pizzaplanet.jpg"],
                imageSource: "Image from "
            },
        ],
    },
    {
        category: "Inte som du tror...",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Deprimerad änkling samarbetar med psykiskt funktionshindrad kvinna för att hitta sin funktionshindrade son",
                answer: "Vad är Hitta Nemo?",
                image: images["hittanemo.jpg"],
                imageSource: ""
            },
            {
                id: 22,
                level: 200,
                question: "Tjejen vaknar upp av att en främling ligger ovanpå henne i en säng, men det är coolt för han är snygg",
                answer: "Vad är Törnrosa?",
                image: images["tornrosa.jpg"],
                imageSource: ""
            },
            {
                id: 23,
                level: 300,
                question: "Drogberoende flicka utnyttjar funktionsnedsatt pojke...i 3 decennier",
                answer: "Vad är Forrest Gump?",
                image: images["forrestgump.jpg"],
                imageSource: ""
            },
            {
                id: 24,
                level: 400,
                question: "Den oförskämda pappan försöker få sin son att ta över familjeföretaget",
                answer: "Vad är Star Wars?",
                image: images["starwars.jpg"],
                imageSource: "Image from europosters.se"
            },
            {
                id: 25,
                level: 500,
                question: "Kvinnlig tonåring överger alla sina normer för att vinna tillbaka en kåt tonåring med fett hår",
                answer: "Vad är Grease?",
                image: images["grease.jpg"],
                imageSource: "Image from ew.com"
            },
        ],
    },
]