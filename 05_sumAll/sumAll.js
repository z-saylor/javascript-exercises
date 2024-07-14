const sumAll = function(input1, input2) {
    let output = 0
    if (input1 < input2) {
        startNum = input1;
        endNum = input2;
    } else {
        startNum = input2;
        endNum = input1;
    }

    if (input1 < 0 || input2 < 0) return "ERROR"

    if (typeof input1 !== 'number' || typeof input2 !== 'number') return "ERROR"

    for (let i = startNum; i <= endNum; i++) {
        output += i
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;
