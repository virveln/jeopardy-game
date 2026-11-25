// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/aw1', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  
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
        label: "AW",
        category: "Ett knapptryck bort",
        questions: [
            {
                id: 1,
                level: 100,
                question: "Denna tangentbordslayout skapades för att skrivmaskinernas bokstavsarmar inte skulle fastna med varandra och används idag på de flesta tangentbord i världen.",
                answer: "Vad är QWERTY?",
                image: images["qwerty.jpeg"],
                imageSource: "Image from englishclub.com"
            },
            {
                id: 2,
                level: 200,
                question: "På ett svenskt tangentbord delar denna siffra tangent med dollartecknet ($).",
                answer: "Vad är 4?",
                image: images["dollar-sign.jpg"],
                imageSource: "Image from computerhope.com"
            },
            {
                id: 3,
                level: 300,
                question: "Vid vanlig textinmatning är detta tangentbordets mest använda tangent.",
                answer: "Vad är Mellanslag?",
                image: images["mellanslag.webp"],
                imageSource: "Image from businessinsider.com"
            },
            {
                id: 4,
                level: 400,
                question: "Detta kortkommando öppnar Aktivitetshanteraren.",
                answer: "Vad är Ctrl + Shift + Esc?",
                image: images["aktivitetshanteraren.jpeg"],
                imageSource: "Image from FaceBook Computer Tech"
            },
            {
                id: 5,
                level: 500,
                question: "Denna tangent används för att växla mellan att infoga ny text och skriva över befintlig text.",
                answer: "Vad är Insert (Ins)?",
                image: images["insert.jpg"],
                imageSource: "Image from velvetcairns.com"
            },
        ],
    },
    {
        category: "Vad låter det som?",
        questions: [
            {
                id: 6,
                level: 100,
                question: "Fredagskväll och dämpad belysning<br>Du letar efter ett ställe att gå till<br>Där de spelar rätt sorts musik<br>Där stämningen kommer igång<br>Du är på jakt efter en kung",
                answer: "Vad är Dancing Queen (ABBA)?",
                image: images["abba.jpg"],
                imageSource: "Image from Imdb"
            },
            {
                id: 7,
                level: 200,
                question: "Men ungen är inte min son",
                answer: "Vad är Billie Jean (Michael Jackson)?",
                image: images["michaeljackson.jpg"],
                imageSource: "Image from Wikipedia"
            },
            {
                id: 8,
                level: 300,
                question: "Jag lever min dag som om den vore den sista<br>Lever min dag som om det inte fanns något förflutet",
                answer: "Vad är Lush Life (Zara Larsson)?",
                image: images["zaralarsson.png"],
                imageSource: "Image from Wikipedia"
            },
            {
                id: 9,
                level: 400,
                question: "Nåväl, jag fann en tjej, vacker och sök<br>Åh, jag anade aldrig att det var du som väntade på mig",
                answer: "Vad är Perfect (Ed Sheeran)?",
                image: images["edsheeran.jpg"],
                imageSource: "Image from Wikipedia"
            },
            {
                id: 10,
                level: 500,
                question: "Åh, jag kan inte gå längre än så här<br>Åh, jag vill ha dig så otroligt mycket, det är min största önskan<br>Häftigt, jag tillbringar min tid med att bara tänka, tänka, tänka på dig",
                answer: "Vad är Meet Me Halfway (Black Eyed Peas)?",
                image: images["bep.png"],
                imageSource: "Image from Genius"
            },
        ],
    },
    {
        category: "Vad har du i glaset?",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Denna klassiska drink innehåller rom, limejuice, mynta, sodavatten och sockerlag.",
                answer: "Vad är Mojito?",
                image: images["mojito.jpg"],
                imageSource: "Image from cocktailguiden.com"
            },
            {
                id: 12,
                level: 200,
                question: "Denna ingrediens ger grenadin dess röda färg och traditionella fruktiga smak.",
                answer: "Vad är granatäpple?",
                image: images["grenadin.jpeg"],
                imageSource: "Image from drinkbolaget"
            },
            {
                id: 13,
                level: 300,
                question: "Denna råvara är huvudingrediensen som ger gin dess karakteristiska smak.",
                answer: "Vad är enbär?",
                image: images["enbar.webp"],
                imageSource: "Image from corkframes.com"
            },
            {
                id: 14,
                level: 400,
                question: "Denna klassiska drink serveras traditionellt i en kopparmugg och innehåller vodka, ginger beer och limejuice.",
                answer: "Vad är Moscow Mule?",
                image: images["moscowmule.jpg"],
                imageSource: "Image from ICA"
            },
            {
                id: 15,
                level: 500,
                question: "Denna ingrediens saknas i en klassisk Margarita, som annars innehåller tequila, limejuice och sockerlag.",
                answer: "Vad är triple sec/Cointreau (vilket är apelsinlikör)?",
                image: images["margarita.webp"],
                imageSource: "Image from InsideHook"
            },
        ],
    },
    {
        category: "Kärt barn har många betydelser",
        questions: [
            {
                id: 16,
                level: 100,
                question: "En mejeriprodukt eller ett dokument på en dator.",
                answer: "Vad är fil?",
                image: images["fil.jpeg"],
                imageSource: ""
            },
            {
                id: 17,
                level: 200,
                question: "Enklare restaurang eller naken.",
                answer: "Vad är bar?",
                image: images["bar.jpeg"],
                imageSource: ""
            },
            {
                id: 18,
                level: 300,
                question: "En del av en växt eller något man räknar ut inom matematiken.",
                answer: "Vad är rot?",
                image: images["rot.jpeg"],
                imageSource: ""
            },
            {
                id: 19,
                level: 400,
                question: "Himmel eller köttspad.",
                answer: "Vad är sky?",
                image: images["sky.jpeg"],
                imageSource: ""
            },
            {
                id: 20,
                level: 500,
                question: "På en gryta eller i håret.",
                answer: "Vad är lock?",
                image: images["lock.jpeg"],
                imageSource: ""
            },
        ],
    },
    {
        category: "segnälkaB Baklänges",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Italines huvudstad.",
                answer: "Vad är mor (Rom)?",
                image: images["mor.jpeg"],
                imageSource: ""
            },
            {
                id: 22,
                level: 200,
                question: "Ett djur som har blivit van vid människor och är motsatsen till vilt.",
                answer: "Vad är mat (tam)?",
                image: images["mat.jpeg"],
                imageSource: ""
            },
            {
                id: 23,
                level: 300,
                question: "Person som översätter mellan språk.",
                answer: "Vad är klot (tolk)?",
                image: images["klot.jpeg"],
                imageSource: ""
            },
            {
                id: 24,
                level: 400,
                question: "En omfamning med armarna.",
                answer: "Vad är mark (kram)?",
                image: images["mark.jpeg"],
                imageSource: ""
            },
            {
                id: 25,
                level: 500,
                question: "Förvaringsplats för varor, eller ett skikt av något.",
                answer: "Vad är regal (lager)?",
                image: images["regal.jpeg"],
                imageSource: ""
            },
        ],
    },
]