// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let terms = message.split(' ');

    let cropIndex = 0;
    let lastIndex = 0;
    if (K < terms[0].length) return '';
    let i = 0;
    for (; i < terms.length; i++) {
        cropIndex += terms[i].length;
        if (cropIndex + i > K) {
            break;
        }
        lastIndex = cropIndex;
    }
    console.log('here:' + i);
    console.table(terms);
    let str = message.substr(0, lastIndex + i - 1);
    return str;
}

console.log(solution('The quick brown fox jumps over the lazy dog', 39));
