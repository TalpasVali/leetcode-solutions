/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let i = 0;
    let j = s.length - 1;
    let chars = s.split("");

    while (i < j) {
        if (vowels.has(chars[i]) && vowels.has(chars[j])) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            i++;
            j--;
        } else if (!vowels.has(chars[i])) i++;
        else j--;
    }
    return chars.join("");
};
