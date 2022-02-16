const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrSplitted = expr.split('');
    let arr = [];
    let res = '';
    while (arrSplitted.length > 0) {
        arr.push(arrSplitted.splice(0, 10));
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('*')) {
            res += ' ';
            continue;
        }
        let currentWord = '';
        for (let j = 0; j < arr[i].length; j += 2) {
            if (arr[i][j] === '1' && arr[i][j + 1] === '0') currentWord += '.';
            else if (arr[i][j] === '1' && arr[i][j + 1] === '1') currentWord += '-';
        }
        res += MORSE_TABLE[currentWord];

    }
    return res;
}

module.exports = {
    decode
}