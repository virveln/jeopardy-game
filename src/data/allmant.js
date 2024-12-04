// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Ladda alla bilder från img-mappen
const images = importAllImages(require.context('../images/allmanbildning', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));


export default [

    {
        label: "Allmänbildning Edition",
        category: "Svensk Historia",
        questions: [
            {
                id: 1,
                level: 100,
                question: "År 1520 inträffade denna massavrättning i Stockholm.",
                answer: "Vad är Stockholms blodbad?",
                image: images["stockholms-blodbad.jpg"],
                imageSource: "Image from kb.se"
            },
            {
                id: 2,
                level: 200,
                question: "Det här året blev Sverige medlem i EU.",
                answer: "Vad är 1995?",
                image: images["eu.jpg"],
                imageSource: "Image from Freepik by rawpixel.com"
            },
            {
                id: 3,
                level: 300,
                question: "Denna kung ledde Sverige under stormaktstiden och stupade vid Lützen 1632.",
                answer: "Vem är Gustav II Adolf?",
                image: images["gustav-adolf.avif"],
                imageSource: "Image from popularhistoria.se"
            },
            {
                id: 4,
                level: 400,
                question: "Denna stad var Sveriges första huvudstad.",
                answer: "Vad är Sigtuna?",
                image: images["sigtuna.jpg"],
                imageSource: "Image from stadtillstrand.se"
            },
            {
                id: 5,
                level: 500,
                question: "Denna regent är känd för att vara den sista att styra som enväldig kung i Sverige.",
                answer: "Vem är Karl XII?",
                image: images["karl-xii.avif"],
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
                image: images["brasilien.png"],
                imageSource: "Image from Freepik by macrovector"
            },
            {
                id: 7,
                level: 200,
                question: "Denna bergskedja, som sträcker sig genom flera länder, är hem för världens högsta topp.",
                answer: "Vad är Himalaya?",
                image: images["himalaya.jpg"],
                imageSource: "Image from dagensarena.se"
            },
            {
                id: 8,
                level: 300,
                question: "Detta land har flest öar i världen, med 267.570 öar.",
                answer: "Vad är Sverige?",
                image: images["sverige.png"],
                imageSource: "Image from Freepik by macrovector"
            },
            {
                id: 9,
                level: 400,
                question: "Detta land är Afrikas till yta största land och känt för att ha den största öknen, Sahara, på sin terräng.",
                answer: "Vad är Algeriet?",
                image: images["algeriet.jpg"],
                imageSource: "Image from sorummet.se"
            },
            {
                id: 10,
                level: 500,
                question: "Detta land har flest officiella språk i världen, totalt 16 stycken, och dess huvudstad är Harare.",
                answer: "Vad är Zimbabwe?",
                image: images["zimbabwe.jpg"],
                imageSource: "Image from equmenia.se"
            }
        ]
    },
    {
        category: "Vetenskap",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Det här är den vanligaste gasen i jordens atmosfär.",
                answer: "Vad är kväve?",
                image: images["kväve.png"],
                imageSource: "Image from kemi.ugglansno.se"
            },
            {
                id: 12,
                level: 200,
                question: "Denna planet är närmast solen.",
                answer: "Vad är Merkurius?",
                image: images["merkurius.jpg"],
                imageSource: "Image from rymdstyrelsen.se"
            },
            {
                id: 13,
                level: 300,
                question: "Albert Einstein är mest känd för denna fysikaliska teori.",
                answer: "Vad är relativitetsteorin?",
                image: images["relatititetsteorin.png"],
                imageSource: "Image from eddler.se"
            },
            {
                id: 14,
                level: 400,
                question: "Detta är namnet på den teori som beskriver hur universum expanderade från ett extremt tät och het tillstånd för ungefär 13,8 miljarder år sedan.",
                answer: "Vad är Big Bang?",
                image: images["bigbang.jpeg"],
                imageSource: "Image created from Bing AI"
            },
            {
                id: 15,
                level: 500,
                question: "Den här vetenskapsmannen upptäckte penicillin 1928 och vann Nobelpriset för sitt arbete.",
                answer: "Vem är Alexander Fleming?",
                image: images["fleming.webp"],
                imageSource: "Image from britannica.com"
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
                image: images["loreen.jpg"],
                imageSource: "Image from nbcnews.com"
            },
            {
                id: 17,
                level: 200,
                question: "Denna sång av ABBA vann Eurovision Song Contest 1974.",
                answer: "Vad är <i>Waterloo</i>?",
                image: images["abba.webp"],
                imageSource: "Image from TT Nyhetsbyrån"
            },
            {
                id: 18,
                level: 300,
                question: "Den här filmen, regisserad av James Cameron, blev världens mest inkomstbringande film 2009.",
                answer: "Vad är Avatar?",
                image: images["avatar.webp"],
                imageSource: "Image from 20th Century Studios"
            },
            {
                id: 19,
                level: 400,
                question: "Det här block-spelet, utvecklat av svenska Mojang, blev en global succé.",
                answer: "Vad är Minecraft?",
                image: images["minecraft.jpg"],
                imageSource: "Image from minecraft.net"
            },
            {
                id: 20,
                level: 500,
                question: "Denna dystopiska roman från 1954, skriven av William Golding, handlar om en grupp pojkar strandade på en ö.",
                answer: "Vad är Flugornas herre?",
                image: images["flugornasherre.webp"],
                imageSource: "Image from Googlee Play"
            }
        ]
    },
    {
        category: "Mat och Dryck",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Detta japanska risvin används både som dryck och i matlagning och är känd för sin umamirika smak.",
                answer: "Vad är sake?",
                image: images["sake.jpg"],
                imageSource: "Image from redandwhiteshops.com"
            },
            {
                id: 22,
                level: 200,
                question: "Denna krydda ger curry sin gula färg.",
                answer: "Vad är gurkmeja?",
                image: images["gurkmeja.jpg"],
                imageSource: "Image from tasteline.com"
            },
            {
                id: 23,
                level: 300,
                question: "Denna franska dessert består av karamelliserat socker och en krämig vaniljbotten.",
                answer: "Vad är crème brûlée?",
                image: images["cremebrule.jpg"],
                imageSource: "Image from imperialsugar.com"
            },
            {
                id: 24,
                level: 400,
                question: "Denna franska metod för att långsamt tillaga mat i vakuumförpackningar i ett vattenbad har blivit populär inom modern gastronomi.",
                answer: "Vad är sous-vide?",
                image: images["sousvide.webp"],
                imageSource: "Image from anovaculinary.com"
            },
            {
                id: 25,
                level: 500,
                question: "Denna sydamerikanska ört används för att brygga en koffeinhaltig dryck som dricks ur en kalebass med ett metalliskt sugrör.",
                answer: "Vad är mate?",
                image: images["mate.webp"],
                imageSource: "Image from balibetov.com"
            }
        ],
    },
]