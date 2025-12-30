// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
  const images = importAllImages(require.context('../images/allmanbildning', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
  
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
        label: "Tema Namn",
        category: "Små ordspråk, stora städer",
        questions: [
            {
                id: 1,
                level: 100,
                question: "The big apple.",
                answer: "Vad är New York?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 2,
                level: 200,
                question: "Sin City",
                answer: "Vad är Las Vegas?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 3,
                level: 300,
                question: "The city of light",
                answer: "Vad är Paris?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 4,
                level: 400,
                question: "The big smoke",
                answer: "Vad är London?",
                image: images[""],
                imageSource: ""
            },
            {
                id: 5,
                level: 500,
                question: "The city of dreams",
                answer: "Vad är Mumbai?\n\n(Symboliserar hopp för framgång inom Bollywood, business, fashion)",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Vem sa det där?",
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
                question: "”To infinity… and beyond!”",
                answer: "Vem är Buzz Lightyear?\n\n(Toy Story)",
                image: images[""],
                imageSource: ""
            },
            {
                id: 8,
                level: 300,
                question: "”Houston, we've had a problem.”",
                answer: "Vem är Jack Swigert?\n\n(Jim Lovell upprepade mer detaljerat, Apollo 13)",
                image: images[""],
                imageSource: ""
            },
            {
                id: 9,
                level: 400,
                question: "”I am the one who knocks”",
                answer: "Vem är Walter White?\n\n(Heisenberg, Breaking bad)",
                image: images[""],
                imageSource: ""
            },
            {
                id: 10,
                level: 500,
                question: "”You either die a hero, or you live long enough to see yourself become the villain.”",
                answer: "Vem är Harvey Dent?\n\n(Two-Face, The Dark Knight)",
                image: images[""],
                imageSource: ""
            },
        ],
    },
    {
        category: "Kategori 3",
        questions: [
            {
                id: 11,
                level: 100,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 12,
                level: 200,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 13,
                level: 300,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 14,
                level: 400,
                question: "",
                answer: "",
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
        category: "Kategori 4",
        questions: [
            {
                id: 16,
                level: 100,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 17,
                level: 200,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 18,
                level: 300,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 19,
                level: 400,
                question: "",
                answer: "",
                image: images[""],
                imageSource: ""
            },
            {
                id: 20,
                level: 500,
                question: "",
                answer: "",
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