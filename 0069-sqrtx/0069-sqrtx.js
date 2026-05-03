/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let right = x;
    let left = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid < x) left = mid + 1;
        else if (mid * mid === x) return mid;
        else right = mid - 1;
    }
    return right;
};
