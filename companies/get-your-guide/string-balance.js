function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let distinct = removedups(S).split('');

    let chars = S.split('');

    let numberOfBalanced = 0;

    for (let j = 0; j < distinct.length; j++) {
        let currentChar = distinct[j];

        if (
            (isLower(currentChar) &&
                chars.indexOf(currentChar.toUpperCase()) != -1) ||
            (!isLower(currentChar) &&
                chars.indexOf(currentChar.toLowerCase() != -1))
        ) {
            numberOfBalanced++;
        }
    }

    console.log(`number of balanced: ${numberOfBalanced}`);

    if (numberOfBalanced === 0) {
        return -1;
    }
}

function isLower(character) {
    if (character == character.toUpperCase()) {
        return false;
    }
    return true;
}

function removedups(string) {
    return string
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}

function extractFragments(s) {
    let ss = s.split('');
    let fragments = [];
    for (let i = 0; i < ss.length; i++) {
        for (let j = i; j <= ss.length; j++) {
            console.log(i + ' , ' + j);
            if (Math.abs(i - j) >= 2) {
                fragments.push(s.substr(i, j));
            }
        }
    }
    return fragments;
}

solution('aA');
solution('CATattac');
solution('Madam');
solution('azABaabza');
solution('TacoCat');
solution('AcZCbaBz');
solution('abcdefghijklmnopqrstuvwxyz');
