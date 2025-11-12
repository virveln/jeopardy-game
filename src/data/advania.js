// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  // Ladda alla bilder från img-mappen
const allmantImages = importAllImages(require.context('../images/allmanbildning', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));
const advaniaImages = importAllImages(require.context('../images/advania', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));

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
        label: "Operations AW",
        category: "Svensk Historia",
        questions: [
            {
                id: 1,
                level: 100,
                question: "År 1520 inträffade denna massavrättning i Stockholm.",
                answer: "Vad är Stockholms blodbad?",
                image: allmantImages["stockholms-blodbad.jpg"],
                imageSource: "Image from kb.se"
            },
            {
                id: 2,
                level: 200,
                question: "Det här året blev Sverige medlem i EU.",
                answer: "Vad är 1995?",
                image: allmantImages["eu.jpg"],
                imageSource: "Image from Freepik by rawpixel.com"
            },
            {
                id: 3,
                level: 300,
                question: "Denna kung ledde Sverige under stormaktstiden och stupade vid Lützen 1632.",
                answer: "Vem är Gustav II Adolf?",
                image: allmantImages["gustav-adolf.avif"],
                imageSource: "Image from popularhistoria.se"
            },
            {
                id: 4,
                level: 400,
                question: "Denna stad var Sveriges första huvudstad.",
                answer: "Vad är Sigtuna?",
                image: allmantImages["sigtuna.jpg"],
                imageSource: "Image from stadtillstrand.se"
            },
            {
                id: 5,
                level: 500,
                question: "Denna regent är känd för att vara den sista att styra som enväldig kung i Sverige.",
                answer: "Vem är Karl XII?",
                image: allmantImages["karl-xii.avif"],
                imageSource: "Image from popularhistoria.se"
            },
        ],
    },
    {
        category: "Geografi",
        questions: [
            {
                id: 6,
                level: 100,
                question: "Detta land har den största regnskogen i världen.",
                answer: "Vad är Brasilien?",
                image: allmantImages["brasilien.png"],
                imageSource: "Image from Freepik by macrovector"
            },
            {
                id: 7,
                level: 200,
                question: "Denna bergskedja, som sträcker sig genom flera länder, är hem för världens högsta topp.",
                answer: "Vad är Himalaya?",
                image: allmantImages["himalaya.jpg"],
                imageSource: "Image from dagensarena.se"
            },
            {
                id: 8,
                level: 300,
                question: "Detta land har flest öar i världen, med 267.570 öar.",
                answer: "Vad är Sverige?",
                image: allmantImages["sverige.png"],
                imageSource: "Image from Freepik by macrovector"
            },
            {
                id: 9,
                level: 400,
                question: "Detta land är Afrikas till yta största land och känt för att ha den största öknen, Sahara, på sin terräng.",
                answer: "Vad är Algeriet?",
                image: allmantImages["algeriet.jpg"],
                imageSource: "Image from sorummet.se"
            },
            {
                id: 10,
                level: 500,
                question: "Detta land har flest officiella språk i världen, totalt 16 stycken, och dess huvudstad är Harare.",
                answer: "Vad är Zimbabwe?",
                image: allmantImages["zimbabwe.jpg"],
                imageSource: "Image from equmenia.se"
            }
        ]
    },
    {
        category: "IT",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Denna webbläsare används ofta bara för att ladda ner en annan webbläsare.",
                answer: "Vad är Microsoft Edge (Internet Explorer)?",
                image: advaniaImages["edge.png"],
                imageSource: "Image from Microsoft Store"
            },
            {
                id: 12,
                level: 200,
                question: "Denna supportfråga löser 90 % av alla IT-problem.",
                answer: "Vad är “Har du provat starta om?”",
                image: advaniaImages["startaom.png"],
                imageSource: "Image from Microsoft Support"
            },
            {
                id: 13,
                level: 300,
                question: "Detta uppstår när man exempelvis glömt ' ; ' i koden.",
                answer: "Vad är syntaxfel?",
                image: advaniaImages["syntaxerror.jpeg"],
                imageSource: ""
            },
            {
                id: 14,
                level: 400,
                question: "Denna funktion skapar en egen kopia av ett repository på GitHub, separat från originalet.",
                answer: "Vad är Fork?",
                image: advaniaImages["fork.png"],
                imageSource: "Image from Rietta.com"
            },
            {
                id: 15,
                level: 500,
                question: "Detta är ett problem som uppstår när flera trådar försöker ändra samma data samtidigt.",
                answer: "Vad är Race condition?",
                image: advaniaImages["racecondition.png"],
                imageSource: "Image from baeldung.com"
            }
        ]
    },
    {
        category: "Populärkultur",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Denna kvinnliga svenska artisten har vunnit Eurovision Song Contest två gånger.",
                answer: "Vem är Loreen?",
                image: allmantImages["loreen.jpg"],
                imageSource: "Image from nbcnews.com"
            },
            {
                id: 17,
                level: 200,
                question: "Denna sång av ABBA vann Eurovision Song Contest 1974.",
                answer: "Vad är <i>Waterloo</i>?",
                image: allmantImages["abba.webp"],
                imageSource: "Image from TT Nyhetsbyrån"
            },
            {
                id: 18,
                level: 300,
                question: "Det här block-spelet, utvecklat av svenska Mojang, blev en global succé.",
                answer: "Vad är Minecraft?",
                image: allmantImages["minecraft.jpg"],
                imageSource: "Image from minecraft.net"
            },
            {
                id: 19,
                level: 400,
                question: "Den här filmen, regisserad av James Cameron, blev världens mest inkomstbringande film 2009.",
                answer: "Vad är Avatar?",
                image: allmantImages["avatar.webp"],
                imageSource: "Image from 20th Century Studios"
            },
            {
                id: 20,
                level: 500,
                question: "Denna dystopiska roman från 1954, skriven av William Golding, handlar om en grupp pojkar strandade på en ö.",
                answer: "Vad är <i>Flugornas herre</i> / <i>Lord of the Flies</i>?",
                image: allmantImages["flugornasherre.webp"],
                imageSource: "Image from Googlee Play"
            }
        ]
    },
    {
        category: "iBiz",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Detta var antalet kvm förra kontoret hade — ett tal som även kallas 'odjurets tal'.",
                answer: "Vad är 666?",
                image: advaniaImages["666.jpg"],
                imageSource: ""
            },
            {
                id: 22,
                level: 200,
                question: "Detta är koden in till trapphuset.",
                answer: "Vad är 9215?",
                image: advaniaImages[""],
                imageSource: ""
            },
            {
                id: 23,
                level: 300,
                question: "Detta företag utav Handelsbanken, Nordea och Forex har aldrig varit kund till iBiz.",
                answer: "Vad är Nordea?",
                image: advaniaImages["nordea.png"],
                imageSource: ""
            },
            {
                id: 24,
                level: 400,
                question: "Detta år startade iBiz sin resa.",
                answer: "Vad är 2008?",
                image: advaniaImages[""],
                imageSource: ""
            },
            {
                id: 25,
                level: 500,
                question: "Detta är iBiz fullständiga namn.",
                answer: "Vad är Intelligent Business Solutions i Norden (AB)?",
                image: advaniaImages["ibiz.png"],
                imageSource: ""
            }
        ],
    },
]