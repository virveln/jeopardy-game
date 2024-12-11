
// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/nyår2024', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  

export default [
 
    {
        label: "Nyår 2024",
        category: "Nyår",
        questions: [
            {
                id: 1,
                level: 100,
                question: "Det var året alla var rädda för skulle förändra samhället.",
                answer: "Vad är år 2000?",
                image: images['2000.avif'],
                imageSource: "Image from Google"
            },
            {
                id: 2,
                level: 200,
                question: "Detta nyårsfirande varar i 15 dagar och kulminerar vanligtvis med en färgstark drakdans.",
                answer: "Vad är kinesiska nyåret?",
                image: images["kinesiskanyåret.jpeg"],
                imageSource: "Image from Google"
            },
            {
                id: 3,
                level: 300,
                question: "På denna plats sänks en stor boll vid midnatt.",
                answer: "Vad är Times Square i New York?",
                image: images["balldrop.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 4,
                level: 400,
                question: "I detta land firas nyårsafton med en ljusfestival känd som Diwali.",
                answer: "Vad är Indien?",
                image: images["diwali.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 5,
                level: 500,
                question: "Detta kallas nyårsafton i Skottland.",
                answer: "Vad är Hogmanay?",
                image: images["hogmanay.jpg"],
                imageSource: "Image from Google"
            },
        ],
    },
    {
        category: "Nyårskaramell",
        questions: [
            {
                id: 6,
                level: 100,
                question: '"Hur ofta tänker du på..."',
                answer: "Vad är romarriket?",
                image: images["romarriket.jpg"],
            },
            {
                id: 7,
                level: 200,
                question: "Varumärket som äger Barbie.",
                answer: "Vad är Mattel?",
                image: images["mattel.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 8,
                level: 300,
                question: "Kommunen (som börjar på L) utsågs till att vara bäst att leva i 2023.",
                answer: "Vad är Luleå?",
                image: images["lulea.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 9,
                level: 400,
                question: 'Detta partiets ledare postade tweeten:<br><em>"Vet ni vad jag är jävligt trött på? Äldre, privilegierade och, dare I say it, vita män"</em>',
                answer: "Vad är Centerpartiet (Muharrem Demirok)?",
                image: images["centerpartiet.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 10,
                level: 500,
                question: "Argentinas president pratar med ... via sitt medium.",
                answer: "Vem är hans döda hund?",
                image: images["argentina.webp"],
                imageSource: "Image from Google"
            },
        ],
    },
    {
        category: "Nya ord",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Längre relation som befinner sig någonstans mellan romantiskt förhållande och vänskap.",
                answer: "Vad är situationship?",
                image: images["situationship.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 12,
                level: 200,
                question: "Drag eller beteende hos en person som en annan person finner frånstötande.",
                answer: "Vad är ick?",
                image: images["ick.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 13,
                level: 300,
                question: "Lättare fysisk träning för äldre där föremål i utemiljön används exempelvis som hinder att klättra över.",
                answer: "Vad är tantparkour?",
                image: images["tantparkour.jpeg"],
                imageSource: "Image from Google"
            },
            {
                id: 14,
                level: 400,
                question: "Graviditet som genomförs helt utan kontakt med vården.",
                answer: "Vad är vild graviditet <br><br><i>(graviditeten är oövervakad och att kvinnan inte går på några kontroller hos mödravården)</i>",
                image: images["graviditet.jpeg"],
                imageSource: "Image from Google"
            },
            {
                id: 15,
                level: 500,
                question: "Person som får fördelar i sin karriär för att den har en känd eller inflytelserik förälder.",
                answer: "Vad är nepo baby?",
                image: images["nepobaby.webp"],
                imageSource: "Image from Google"
            },
        ],
    },
    {
        category: "Musik",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Duon ... och artisten ... är svenska välspelade artister bärande balaklava.",
                answer: "Vem är Hooja och Fröken snusk?",
                image: images["hooja-frökensnusk.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 17,
                level: 200,
                question: "Artisten är årets mest globala spelade.",
                answer: "Vem är Taylor Swift?",
                image: images["taylorswift.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 18,
                level: 300,
                question: "Artisten blev stämd av sina egna dansare.",
                answer: "Vem är Lizzo?",
                image: images["lizzo.jpeg"],
                imageSource: "Image from Google"
            },
            {
                id: 19,
                level: 400,
                question: "Artisten har påståtts sålt sin själ till djävulen.",
                answer: "Vem är Doja Cat?",
                image: images["dojacat.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 20,
                level: 500,
                question: "Låten var årets mest globala spelade.",
                answer: "Vad är <i>Flowers</i> (med Miley Cyrus)?",
                image: images["flowers.jpg"],
                imageSource: "Image from Google"
            },
        ],
    },
    {
        category: "Löften",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Detta är det vanligste nyårslöftet.",
                answer: "Vad är att bli mer hälsosam (träna, nyttig etc.)?",
                image: images["healty.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 22,
                level: 200,
                question: 'Detta kallas det när man länkar ihop sina lillfingrar <br>(på engelska).',
                answer: "Vad är pinky promise?",
                image: images["pinkypromise.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 23,
                level: 300,
                question: 'Denna artist har en låt som innehåller följande text: <br><br><em>I make no promises, I can\'t do golden rings. <br>But I\'ll give you everything (Tonight)</em>',
                answer: "Vem är Sam Smith (och Calvin Harris) med <i>Promises</i>?",
                image: images["promises.jpg"],
                imageSource: "Image from Google"
            },
            {
                id: 24,
                level: 400,
                question: 'Detta heter låten med texten: <br><br><em>Tears stream down your face <br>I promise you I will learn from my mistakes <br>Tears stream down your face, and I... <br>Lights will guide you home</em>',
                answer: "Vad är <i>Fix You</i> (med Coldplay)?",
                image: images["coldplay.avif"],
                imageSource: "Image from Google"
            },
            {
                id: 25,
                level: 500,
                question: 'Denna artist har en låt som innehåller texten:<br><br><em>Just like a chick in the casino <br>Take your bank before I pay you out <br>I promise this, promise this <br>Check this hand \'cause I\'m marvelous</em>',
                answer: "Vem är Lady Gaga (med <i>Pokerface</i>)?",
                image: images["ladygaga.jpg"],
                imageSource: "Image from Google"
            },
        ],
    },

]