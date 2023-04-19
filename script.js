// The arrays below contain the selectable languages, words and verbs.
const languages = ['Spanish', 'German', 'Italian'];

const nouns = [
    ['el amor', 'el perro', 'el gato', 'la persona', 'el amigo', 'el grupo', 'la gente', 'el padre / la madre', 'el hermano / la hermana', 'el primo / la prima', 'la familia', 'la casa', 'la ciudad', 'el país', 'el agua', 'la carne', 'la comida', 'la bebida', 'el tiempo', 'la mujer' ], 
    ['der Bahnhof', 'der Koffer', 'das Gepäck', 'das Ticket', 'die Fahrkarte', 'die Jugendherberge', 'das Zimmer', 'der Zug', 'die Plattform', 'das Geld', 'die Tür', 'das Essen', 'die Straße', 'der Flug', 'die Haltestelle', 'der Schlüßel', 'der Löffel', 'die Gabel', 'das Messer', 'das Kissen'],
    ['il amore', 'il animal', 'la auto / la macchina', 'il affare', 'il bambino / la bambina', 'la cosa', 'la casa', 'la città', 'il clima', 'la famiglia', 'la festa', 'il figlio / la figlia', 'la forza', 'la gente', 'il giorno', 'la luce', 'la mamma', 'il mano', 'il mare', 'il mondo']
];

const verbs = [
    ['abrir', 'volver', 'ver', 'traer', 'trabajar', 'ser', 'salir', 'poner', 'poder', 'pagar', 'lograr', 'llevar', 'llamar', 'jugar', 'hablar', 'acabar', 'aceptar', 'alcanzar', 'aparecer', 'ayudar'],
    ['sein', 'haben', 'werden', 'kommen', 'ankommen', 'verlassen', 'fahren', 'halten', 'schlafen', 'erhalten', 'fangen', 'anfangen', 'fallen', 'vergessen', 'essen', 'sterben', 'nehmen', 'geschehen', 'helfen', 'lesen'],
    ['essere', 'avere', 'volere', 'fare', 'dire', 'capire', 'sapere', 'spiegare', 'uscire', 'andare', 'venire', 'potere', 'dovere', 'preferire', 'bere', 'salire', 'rimanere', 'finire', 'vedere', 'leggere']
]

// The function below generates a random number;
const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

// The function below assigns a random language to study, alongside a common noun and verb.
const messageGenerator = () => {
    const selectedLanguage = languages[randomNumber(languages.length)];
    let selectedNoun;
    let selectedVerb;
    if (selectedLanguage === 'Spanish') {
        selectedNoun = nouns[0][randomNumber(nouns[0].length)];
        selectedVerb = verbs[0][randomNumber(verbs[0].length)];
    } else if (selectedLanguage === 'German') {
        selectedNoun = nouns[1][randomNumber(nouns[1].length)];
        selectedVerb = verbs[1][randomNumber(verbs[1].length)];
    } else if (selectedLanguage === 'Italian') {
        selectedNoun = nouns[2][randomNumber(nouns[2].length)];
        selectedVerb = verbs[2][randomNumber(verbs[2].length)];
    }
    return console.log(`The computer has decided that you should study ${selectedLanguage}.\nA frequently used noun is ${selectedNoun}.\nA frequently used verb is ${selectedVerb}.`);
}


// Area to test that the functions and data structures are working properly.
messageGenerator();
