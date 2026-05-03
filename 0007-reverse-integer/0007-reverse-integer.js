/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let isNegative = x < 0;
    x = Math.abs(x);

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    if (isNegative) reversed *= -1;

    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    if (reversed > INT_MAX || reversed < INT_MIN) return 0;

    return reversed;
};
