// Get the DOM elements: the input box and the h2 for output:
const outH2 = document.querySelector('h2');
const input = document.querySelector('input');
// input search event calls checkScrabbleWord function when user hits enter
// search event also occures when user clicks X to clear input box
input.addEventListener('search', checkScrabbleWord);
input.focus(); // give the input focus (blinking cursor)

function checkScrabbleWord() {
    outH2.textContent = ""; // clear the output from previous word
    let score = 0; // reset the score from the previous word
    let word = input.value.toLowerCase(); // get the word from the input box 
    // if input box is empty, due to user clicking X to clear it:
    if(!word.length) {  // or:   word.length==0   word==""  word.length<1
        outH2.textContent = ""; // clear the output to match the no input
        return;
    }
    // if inputted word is too long (15 letter max)
    if(word.length > 15) {
        outH2.textContent = "Input is too long!";
        return;
    }
    // if word is in the Scrabble Dictionary:
    if(scrabbleDictionaryArr.includes(word)) { 
        let lettersArr = word.split(""); // make array of letters from word
        for(let i = 0; i < lettersArr.length; i++) { // loop array of letters
            let L = lettersArr[i].toUpperCase(); // uppercasee the current letter
            score += letterValuesObj[L]; // look up letter value and increment score
        }
        outH2.textContent = "Value: " + score; // output Scrabble score for word
        return;
    } else { // word is not in the Scrabble Dictionary:
        outH2.textContent = 'Input is not in the Scrabble dictionary!';
        return;
    }
}
