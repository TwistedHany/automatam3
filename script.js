const surigaononToEnglish = {
    "pila man": "How much",
    "kaon": "let's eat",
    "tubig": "water",
    "bayay": "house",
    "adlaw": "sun",
    "gabii": "night",
    "salamat": "thank you",
    "maayong buntag": "good morning",
    "maayong gabii": "good night",
    "sayod": "know",
    "baro": "clothes",
    "marajaw": "beautiful"
};

const prefixes = ["mag", "nag", "pa", "ma"];
const suffixes = ["an", "ay", "on", "in"];

function removeAffixes(word) {
    for (let prefix of prefixes) {
        if (word.startsWith(prefix)) {
            word = word.slice(prefix.length);
            break;
        }
    }
    for (let suffix of suffixes) {
        if (word.endsWith(suffix)) {
            word = word.slice(0, -suffix.length);
            break;
        }
    }
    return word;
}

function checkSpelling(word) {
    const words = Object.keys(surigaononToEnglish);
    let closestMatch = words.find(w => w.includes(word));
    return closestMatch || null;
}

function translateWord() {
    const userInput = document.getElementById('wordInput').value.trim().toLowerCase();
    const correctedSpelling = document.getElementById('corrected-spelling');
    const translation = document.getElementById('translation');
    
    if (!userInput) {
        correctedSpelling.textContent = "Please enter a word.";
        translation.textContent = "";
        return;
    }

    const cleanWord = removeAffixes(userInput);
    const correctWord = checkSpelling(cleanWord);
    const translatedWord = surigaononToEnglish[correctWord];

    if (translatedWord) {
        correctedSpelling.textContent = `Corrected Spelling: ${correctWord}`;
        translation.textContent = `English Translation: ${translatedWord}`;
    } else {
        correctedSpelling.textContent = "Word not found in dictionary.";
        translation.textContent = "";
    }
}

