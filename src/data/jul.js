// Dynamisk import av alla bilder från ../img-mappen
const importAllImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Ladda alla bilder från img-mappen
const images = importAllImages(require.context('../images/jul', true, /\.(avif|jpeg|png|jpg|svg|WEBP|webp)$/));

export default [

    {
        label: "Jul Edition",
        category: "Jultraditioner",
        questions: [
            {
                id: 1,
                level: 100,
                question: "I Sverige är det tradition att titta på detta TV-program klockan 15:00 på julafton.",
                answer: "Vad är <i>'Kalle Anka och hans vänner önskar God Jul'</i>?",
                image: images["kalleanka.jpg"],
                imageSource: "Image from tv.nu"
            },
            {
                id: 2,
                level: 200,
                question: "Denna växt hängs ofta i dörröppningar och sägs bringa lycka om man kysser någon under den.",
                answer: "Vad är mistel?",
                image: images["mistel.jpg"],
                imageSource: "Image from julgran.com"
            },
            {
                id: 3,
                level: 300,
                question: "Denna jultradition från bl.a. Österrike involverar en skrämmande figur som bestraffar olydiga barn och är motsatsen till jultomten.",
                answer: "Vad är Krampus?",
                image: images["krampus.jpg"],
                imageSource: "Image from tjornbo.se"
            },
            {
                id: 4,
                level: 400,
                question: "Det här är namnet på den engelska traditionen där gåvor ursprungligen doneras till behövande 1-2 dagar efter julafton.",
                answer: "Vad är Boxing Day?",
                image: images["boxingday.jpg"],
                imageSource: "Image from Freepik"
            },
            {
                id: 5,
                level: 500,
                question: "I detta land firas jul med en tradition som kallas 'Kiviak', där fågelkött fermenteras inuti en sälkropp.",
                answer: "Vad är Grönland?",
                image: images["kiviak.jpg"],
                imageSource: "Image from tasteatlas.com"
            }
        ]
    },
    {
        category: "Julmusik",
        questions: [
            {
                id: 6,
                level: 100,
                question: "Denna populära moderna julsång framförs av Mariah Carey.",
                answer: "Vad är <i>'All I Want for Christmas Is You'</i>?",
                image: images["carey.jpeg"],
                imageSource: "Image from spotify.com"
            },
            {
                id: 7,
                level: 200,
                question: "Denna julsång framförs av the Plastics på skolans talangshow i Mean Girls",
                answer: "Vad är <i>'Jingle Bell Rock'</i>?",
                image: images["jinglebellrock.webp"],
                imageSource: "Image from buzzfeed.com"
            },
            {
                id: 8,
                level: 300,
                question: "Denna svenska julsång, ofta sjungen i körer, är också känd som 'Gläns över sjö och strand'.",
                answer: "Vad är <i>'Betlehems stjärna'</i>?",
                image: images["betlehems-stjärna.svg"],
                imageSource: "Image from musescore.com"
            },
            {
                id: 9,
                level: 400,
                question: "Denna populära jullåt som handlar om mamma och tomten sjungs av The Jackson 5, ",
                answer: "Vad är <i>'I Saw Mommy Kissing Santa Claus'</i> / <i>'Jag såg mamma kyssa tomten'</i>?",
                image: images["mommy-kissing-Santa.jpg"],
                imageSource: "Image from mjvibe.com"
            },
            {
                id: 10,
                level: 500,
                question: "Denna brittiska julsång är känd för sin text 'Good tidings we bring to you and your kin'.",
                answer: "Vad är <i>'We Wish You a Merry Christmas'</i>?",
                image: images["we-wish.jpg"],
                imageSource: "Image from youtube.com"
            }
        ]
    },
    {
        category: "Julmat",
        questions: [
            {
                id: 11,
                level: 100,
                question: "Denna efterrätt, som ofta serveras vid jul, består av bl.a. gröt blandad med vispad grädde och sötmandel.",
                answer: "Vad är ris à la Malta?",
                image: images["risalamalta.avif"],
                imageSource: "Image from valio.se"
            },
            {
                id: 12,
                level: 200,
                question: "Denna maträtt, ofta gjord på potatis, ansjovis och grädde, är en självklarhet på svenska julbordet.",
                answer: "Vad är Janssons frestelse?",
                image: images["janssons.jpg"],
                imageSource: "Image from abba.se"
            },
            {
                id: 13,
                level: 300,
                question: "Detta norska julbordsmåste är en rätt gjord på fisk.",
                answer: "Vad är lutfisk?",
                image: images["lutfisk.png"],
                imageSource: "Image from sjomatsframjandet"
            },
            {
                id: 14,
                level: 400,
                question: "I Tyskland och Österrike finns en jultradition som kallas Weihnachtsgans, där denna fågel serveras med äpplen, lök och gräddsås.",
                answer: "Vad är gås?",
                image: images["gås.jpg"],
                imageSource: "Image from maggi.de"
            },
            {
                id: 15,
                level: 500,
                question: "I Mexiko äts denna maträtt, gjord av majsdeg fylld med kött och ångkokad i majsskal eller bananblad, ofta under julfirandet.",
                answer: "Vad är tamales?",
                image: images["tamales.jpg"],
                imageSource: "Image from tasteofhome.com"
            }
        ]
    },
    {
        category: "Julfilm",
        questions: [
            {
                id: 16,
                level: 100,
                question: "Denna julfilm från 1988, som utspelar sig på en fest i en skyskrapa, har Bruce Willis i huvudrollen som en polis som bekämpar terrorister.",
                answer: "Vad är <i>'Die Hard'</i>?",
                image: images["diehard.jpg"],
                imageSource: "Image from nfbio.se"
            },
            {
                id: 17,
                level: 200,
                question: "I denna julfilm från 1989, som utspelar sig i Chicago, försöker en ung pojke skydda sitt hem från två tjuvar under julhelgen.",
                answer: "Vad är <i>'Home Alone'</i>?",
                image: images["homealone.jpg"],
                imageSource: "Image from imdb.com"
            },
            {
                id: 18,
                level: 300,
                question: "Denna film från 2003 handlar om en grinig figur som bestämmer sig för att förstöra julen för invånarna i Whoville.",
                answer: "Vad är <i>'How the Grinch Stole Christmas'</i>?",
                image: images["grinchen.jpg"],
                imageSource: "Image from wikipedie.com"
            },
            {
                id: 19,
                level: 400,
                question: "Denna brittiska julfilm från 2011 är en romantisk komedi som väver samman flera olika berättelser om människor som finner kärlek eller frid under julen.",
                answer: "Vad är <i>'Love Actually'</i>?",
                image: images["loveactually.jpg"],
                imageSource: "Image from imdb.com"
            },
            {
                id: 20,
                level: 500,
                question: "I denna julfilm från 2004, regisserad av Tim Burton, blandas Halloween och julen när en karaktär från Halloween Town försöker ta över julen.",
                answer: "Vad är <i>'The Nightmare Before Christmas'</i>?",
                image: images["nighmare-before-christmas.jpg"],
                imageSource: "Image from imdb.com"
            }
        ]
    },
    {
        category: "Julens Historia",
        questions: [
            {
                id: 21,
                level: 100,
                question: "Julen firas för att markera födelsen av denna religiösa figur.",
                answer: "Vem är Jesus Kristus?",
                image: images["jesus.jpg"],
                imageSource: "Image from Freepik by macrovector"
            },
            {
                id: 22,
                level: 200,
                question: "Den här traditionen är en förberedelseperiod inför julen, där ordet är latin för 'ankomst'.",
                answer: "Vad är advent?",
                image: images["advent.webp"],
                imageSource: "Image from smartasaker.se"
            },
            {
                id: 23,
                level: 300,
                question: "Denna jultradition, att klä ett träd, kommer ursprungligen från detta land.",
                answer: "Vad är Tyskland?",
                image: images["julgran.png"],
                imageSource: "Image from Freepik"
            },
            {
                id: 24,
                level: 400,
                question: "Julklappar delades ursprungligen ut under denna helgonhögtid 6 december.",
                answer: "Vad är Sankt Nikolausdagen?",
                image: images["sanktnikolaus.jpg"],
                imageSource: "Image from Freepik"
            },
            {
                id: 25,
                level: 500,
                question: "Det här är det engelska ordet för högtiden som firades i december innan kristendomen införde julen.",
                answer: "Vad är Yule?",
                image: images["yule.jpg"],
                imageSource: "Image from pinterest.se"
            }
        ]
    }
]
