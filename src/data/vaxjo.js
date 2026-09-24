// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/vaxjo', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp|gif)$/));
  
export default [
    {
        label: "Växjö Visit",
        category: "Då & Nu",
        questions: [
            {
                id: 1,
                level: 100,
                question: "Detta år blev både Växjö och Karlstad universitetsstäder.",
                answer: "1999",
                image: images["linneuniversitetet.jpg"],
                imageSource: ""
            },
            {
                id: 2,
                level: 200,
                question: "Detta år var Växjö värd för musikhjälpen.",
                answer: "2023",
                image: images["musikhjalpen.png"],
                imageSource: ""
            },
            {
                id: 3,
                level: 300,
                question: "Detta århundrade blev Växjö en stad.",
                answer: "1300-talet",
                image: images["vaxjo.jpeg"],
                imageSource: ""
            },
            {
                id: 4,
                level: 400,
                question: "Detta nationella idrottsevenemang kommer arrangeras i Växjö 2027.",
                answer: "SM-veckan",
                image: images[""],
                imageSource: ""
            },
            {
                id: 5,
                level: 500,
                question: "Denna högtid firade sjukhuspersonalen på centrallassarettet i Växjö trots att det var mitt i coronapandemin. 28 pers deltog.",
                answer: "Halloween",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "På plats",
        questions: [
            {
                id: 6,
                level: 100,
                question: "Detta landskap befinner vi oss i.",
                answer: "Småland",
                image: images["landskapsvapen.png"],
                imageSource: ""
            },
            {
                id: 7,
                level: 200,
                question: "Denna adress befinner vi oss på nu.",
                answer: "Linnégatan 24",
                image: images["KvarterLagan.jpg"],
                imageSource: ""
            },
            {
                id: 8,
                level: 300,
                question: "Denna centrala sjö ligger precis söder om oss och är ett populärt promenadstråk.",
                answer: "Växjö-sjön",
                image: images["Sjo.jpg"],
                imageSource: ""
            },
            {
                id: 9,
                level: 400,
                question: "Detta är framröstat som Smålands fulaste byggnad. Vad gör man i byggnaden?",
                answer: "Gymnasieskola",
                image: images["byggnad.jpg"],
                imageSource: ""
            },
            {
                id: 10,
                level: 500,
                question: "Detta område är hem till Växjö Lakers, Östers IF och Vipers.",
                answer: "Arenastaden",
                image: images["sport.jpg"],
                imageSource: ""
            },
        ],
    },
    {
        category: "Känt, hänt & sänt",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Han vann melodifestivalen 2019 med låten Too Late for Love.",
                answer: "John Lundvik",
                image: images["artist.jpg"],
                imageSource: ""
            },
            {
                id: 12,
                level: 200,
                question: "Denna verklighetsbaserade svenska filmklassiker är starkt förknippad med Småland och spelades delvis in i Växjö.",
                answer: "Utvandrarna",
                image: images["film.jpg"],
                imageSource: ""
            },
            {
                id: 13,
                level: 300,
                question: "Hon har 34 guldmedaljer (bl.a. OS och VM) inom friidrott och uppvuxen i Växjö.",
                answer: "Carolina Klüft",
                image: images["idrottare.jpg"],
                imageSource: ""
            },
            {
                id: 14,
                level: 400,
                question: "Detta barnprogram som är ett fantasy-rollspel är inspelat i Växjö.",
                answer: "Barda",
                image: images["inspelningsplats.jpg"],
                imageSource: ""
            },
            {
                id: 15,
                level: 500,
                question: "Denna restaurang har en Michelin-stjärna.",
                answer: "PM & vänner",
                image: images["restaurang.jpg"],
                imageSource: ""
            },
        ],
    },
    {
        category: "Språk & talesätt",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Detta äter man 'Fössta tossdan i mass'",
                answer: "Massipantåta",
                image: images[""],
                imageSource: ""
            },
            {
                id: 17,
                level: 200,
                question: "Det är urspungliga namnet för Växjö.",
                answer: "Vägsjön",
                image: images[""],
                imageSource: ""
            },
            {
                id: 18,
                level: 300,
                question: "Detta är öknamnet för Växjö.",
                answer: "Sveriges golvbrunn",
                image: images[""],
                imageSource: ""
            },
            {
                id: 19,
                level: 400,
                question: "Detta är Växjös officiella smeknamn.",
                answer: "Europas grönaste stad",
                image: images[""],
                imageSource: ""
            },
            {
                id: 20,
                level: 500,
                question: "Vad betyder krabba?",
                answer: "Krångla",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Mackan25",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Detta år föddes Mackan25.",
                answer: "2002",
                image: images[""],
                imageSource: ""
            },
            {
                id: 22,
                level: 200,
                question: "Detta instrument spelade Mackan25 i gymnasiet",
                answer: "Gitarr",
                image: images[""],
                imageSource: ""
            },
            {
                id: 23,
                level: 300,
                question: "Dessa två filmer är Mackan25s favoriter",
                answer: "Draktränaren & Bilar",
                image: images[""],
                imageSource: ""
            },
            {
                id: 24,
                level: 400,
                question: "I denna stadsdel växte Mackan25 upp",
                answer: "Hovshaga",
                image: images[""],
                imageSource: ""
            },
            {
                id: 25,
                level: 500,
                question: "Så många lägenheter har Mackan25 bott i.",
                answer: "5",
                image: images[""],
                imageSource: ""
            },
        ],
    },
]
