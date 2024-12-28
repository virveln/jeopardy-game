// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/nyår2025', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  

export default [
 
    {
        label: "Nyår 2025",
        category: "Året som gått",
        questions: [
            {
                id: 1,
                level: 100,
                question: "Detta blev årets nya smaksättning i Blossas glögg.",
                answer: "Vad är whiskey (och algen dulse)?",
                image: images['blossa.avif'],
                imageSource: "Image from blossa.com"
            },
            {
                id: 2,
                level: 200,
                question: "I denna svenska stad hölls Eurovision finalen 2024.",
                answer: "Vad är Malmö?",
                image: images["eurovision.jpeg"],
                imageSource: "Image from ESC Insight"
            },
            {
                id: 3,
                level: 300,
                question: "Så många var medaljerna som Sverige tog emot i sommar OS 2024 i Paris.",
                answer: "Vad är 11?",
                image: images["os.jpeg"],
                imageSource: "Image from X by sportsonmaxse"
            },
            {
                id: 4,
                level: 400,
                question: "Denna film blev 2024 mest inkomstbringande film världen över.",
                answer: "Vad är <i>Insidan ut 2</i> /  <i>Inside out 2</i>",
                image: images["insidanut.jpeg"],
                imageSource: "Image from disney.com"
            },
            {
                id: 5,
                level: 500,
                question: "Detta politiska parti tillhörde kvinnan som tvingades avgå från sin riksdagsplats efter olämpligt beteende på en efterfest i november 2024.",
                answer: "Vad är Miljöpartiet (Elin Söderberg)?",
                image: images["mp.avif"],
                imageSource: "Image from aftonbladet.se"
            },
        ],
    },
    {
        category: "Ny...",
        questions: [
            {
                id: 6,
                level: 100,
                question: "En person som gör något för första gången.",
                answer: "Vad är nybörjare?",
                image: images['nybörjare.jpg'],
                imageSource: "Image from Adobe Stock"
            },
            {
                id: 7,
                level: 200,
                question: "En samling av aktuell information eller händelser.",
                answer: "Vad är nyheter?",
                image: images["nyheter.webp"],
                imageSource: "Image from abcnyheter.se"
            },
            {
                id: 8,
                level: 300,
                question: "Att börja ett nytt liv tillsammans med en partner enligt juridisk ceremoni.",
                answer: "Vad är nygift?",
                image: images["nygift.jpg"],
                imageSource: "Image from iStock"
            },
            {
                id: 9,
                level: 400,
                question: "Detta mellanmål eller efterrätt har serverats i Sveirge sedan 1749 och kan serveras varm eller kall.",
                answer: "Vad är nyponsoppa?",
                image: images["nyponsoppa.png"],
                imageSource: "Image from Ekströms"
            },
            {
                id: 10,
                level: 500,
                question: "Tätort i Södermanland som ursprungligen tros ha hetat Aros.",
                answer: "Vad är Nyköping?",
                image: images["nyköping.webp"],
                imageSource: "Image from nykopingsguiden.se"
            },
        ],
    },
    {
        category: "Nya ord",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Att genomföra en aktivitet utan underhållning eller tidsfördriv. Ex att inte göra någonting när man flyger.",
                answer: "Vad är rawdogga?",
                image: images['rawdogga.jpg'],
                imageSource: "Image from Freepik by nensuria"
            },
            {
                id: 12,
                level: 200,
                question: "Semester som tillbringas på en plats med svalare klimat.",
                answer: "Vad är coolcation?",
                image: images["coolcation.jpg"],
                imageSource: "Image from Freepik by upklyak"
            },
            {
                id: 13,
                level: 300,
                question: "När något är anständigt eller måttfullt. (Ordet blev viralt i ett sammanhang där även mindful användes.)",
                answer: "Vad är demure?",
                image: images["demure.jpg"],
                imageSource: "Image from barrie360"
            },
            {
                id: 14,
                level: 400,
                question: "Beskrivning av någon som klär sig rikt enligt gen Z.",
                answer: "Vad är grisch?",
                image: images["grisch.jpg"],
                imageSource: "Image from Freepik by freepic.diller"
            },
            {
                id: 15,
                level: 500,
                question: "Sommar som präglas av en bekymmerslös livsstil med fokus på njutning och frihet.",
                answer: "Vad är bratsommar?",
                image: images["bratsommar.jpg"],
                imageSource: "Image from Freepik by kjpargeter"
            },
        ],
    },
    {
        category: "Musik",
        questions: [
            {
                id: 16,
                level: 100,
                question: " Denna låt av  ABBA handlar om att välkomna ett nytt år.",
                answer: " Vad är <i>Happy New Year</i>?",
                image: images['abba.jpg'],
                imageSource: "Image from vinylpladen.se"
            },
            {
                id: 17,
                level: 200,
                question: "Denna låt är årets mest globalt spelade.",
                answer: "Vad är <i>Espresso</i> (Sabrina Carpenter)?",
                image: images["espresso.png"],
                imageSource: "Image from wikipedia.com"
            },
            {
                id: 18,
                level: 300,
                question: "Denna brittiska rockgrupp meddelade att de återförenas och kommer göra 14 spelningar 2025.",
                answer: "Vilka är Oasis?",
                image: images["oasis.avif"],
                imageSource: "Image from yle.fi"
            },
            {
                id: 19,
                level: 400,
                question: "Flera låtar av denna artist försvann från Spotify p.g.a. manipulerade streams.",
                answer: "Vem är Fröken Snusk (och Rasmus Gozzi)?",
                image: images["frökensnusk.avif"],
                imageSource: "Image from aftonbladet.se"
            },
            {
                id: 20,
                level: 500,
                question: "I denna europeiska huvudstad ställdes 3 konserter in av Taylor Swifts <i>The Eras tour</i> p.g.a. terrorhot.",
                answer: "Vad är Wien?",
                image: images["wien.avif"],
                imageSource: "Image from Tui"
            },
        ],
    },
    {
        category: "12-slaget",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Detta är traditionellt innehållet i glaset som höjs vid tolvslaget.",
                answer: "Vad är champagne?",
                image: images['champagne.jpg'],
                imageSource: "Image from land.se"
            },
            {
                id: 22,
                level: 200,
                question: "Denna svenska TV-kanal sänder traditionellt <i>Tolvslaget på Skansen</i> där dikten <i>Nyårsklockan</i> läses minuterna före tolvslaget.",
                answer: "Vad är SVT?",
                image: images["svt.avif"],
                imageSource: "Image from Aftonbladet"
            },
            {
                id: 23,
                level: 300,
                question: "Detta symboliserar att jaga bort onda andar och välkomna lycka vid tolvslaget.",
                answer: "Vad är fyrverkerier?",
                image: images["fyrverkeri.jpg"],
                imageSource: "Image from Dagens industri"
            },
            {
                id: 24,
                level: 400,
                question: "I bl.a. Spanien äts 12 st av dessa vid midantt, en per de tolv klockslagen, för att bringa lycka de kommande 12 månaderna.",
                answer: "Vad är vindruvor?",
                image: images["grape.png"],
                imageSource: "Image from Freepik by catalyststuff"
            },
            {
                id: 25,
                level: 500,
                question: "Detta fenomen inträffade senast 2016 vid nyår, då en extra sekund lades till för att justera tiden till jordens rotation.",
                answer: "Vad är skottsekund?",
                image: images["skottsekund.jpg"],
                imageSource: "Image from shutterstock.com"
            },
        ],
    },
]