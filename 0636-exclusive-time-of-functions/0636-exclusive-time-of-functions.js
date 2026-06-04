/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let arr = new Array(n).fill(0)
    let stack = [];
    let prevTime = 0;

    for (let i = 0; i < logs.length; i++) {
        let [id, action, time] = logs[i].split(':')
        id = parseInt(id)
        time = parseInt(time)

        if (action === 'start') {
            if (stack.length > 0) {
                arr[stack[stack.length - 1]] += time - prevTime;
            }
            prevTime = time
            stack.push(id)
        }
        else {
            arr[stack[stack.length - 1]] += time - prevTime + 1
            stack.pop()
            prevTime = time + 1
        }
    }

    return arr;
};