/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let resultArray = [];
    let initialIndex = 0;

    for(let i = 1; i <= n; i++) {
        if(!target[initialIndex]) return resultArray;

        resultArray.push('Push');
        if(target[initialIndex] !== i && initialIndex < target.length) resultArray.push('Pop')
        else initialIndex++

    }

    return resultArray;
};