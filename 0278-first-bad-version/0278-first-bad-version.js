/**
 * @param {function} isBadVersion
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let right = n;
        let left = 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    };
};
