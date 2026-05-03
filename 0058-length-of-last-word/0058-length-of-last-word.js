/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWord = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === " ") i--;

    while (i >= 0 && s[i] !== " ") {
        lastWord++;
        i--;
    }
    return lastWord;
};
