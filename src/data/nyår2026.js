// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/nyår2026', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  

export default [
 
    {
        label: "Nyår 2026",
        category: "Året som gått",
        questions: [
            {
                id: 1,
                level: 100,
                question: "2025 är första året som Blossas glögg är baserad på detta.",
                answer: "Vad är rött vin?",
                image: images['blossa.avif'],
                imageSource: "Image from blossa.com"
            },
            {
                id: 2,
                level: 200,
                question: "",
                answer: "Vad är ?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 3,
                level: 300,
                question: "",
                answer: "Vad är ?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 4,
                level: 400,
                question: "",
                answer: "Vad är",
                image: images[""],
                imageSource: ""
            },
            {
                id: 5,
                level: 500,
                question: "",
                answer: "Vad är?",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Nya ord",
        questions: [
            {
                id: 6,
                level: 100,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 7,
                level: 200,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 8,
                level: 300,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 9,
                level: 400,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 10,
                level: 500,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Musik",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Denna artist hade 2025 flest globala streams på Spotify (ca 19,8 miljarder streams).",
                answer: "Vad är Bad Bunny?",
                image: images["badbunny.webp"],
                imageSource: "Image from New York Times"
            },
            {
                id: 12,
                level: 200,
                question: "I Sverige blev denna låt 2025 årets mest spelade enligt Spotify.",
                answer: "Vad är Bara bada bastu (av KAJ)?",
                image: images["kaj.jpg"],
                imageSource: "Image from Kaj Faacebook"
            },
            {
                id: 13,
                level: 300,
                question: "Denna grupp toppade 2025 listan över mest spelade artister i Sverige.",
                answer: "Vad är Hov1?",
                image: images["hov1.jpg"],
                imageSource: "Image from 8sidor.se"
            },
            {
                id: 14,
                level: 400,
                question: "Denna K-popgrupp blev den första någonsin att få åtta raka listettor på Billboard 200 och slog därmed ett 70-årigt rekord.",
                answer: "Vad är Stray Kids?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 15,
                level: 500,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Ny stad – gammalt land",
        questions: [
            {
                id: 16,
                level: 100,
                question: "",
                answer: "Vad är New York?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 17,
                level: 200,
                question: "",
                answer: "Vad är New Delhi?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 18,
                level: 300,
                question: "",
                answer: "Vad är Newcastle?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 19,
                level: 400,
                question: "",
                answer: "Vad är New Orleans?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 20,
                level: 500,
                question: "",
                answer: "Vad är New England?",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Kategori 5",
        questions: [
            {
                id: 21,
                level: 100,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 22,
                level: 200,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 23,
                level: 300,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 24,
                level: 400,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 25,
                level: 500,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
        ],
    },
]