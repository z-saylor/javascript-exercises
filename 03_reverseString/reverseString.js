const reverseString = function(originalString) {
    let originalArray = originalString.split('');
    let arrayLength = originalArray.length
    let reversedArray = new Array(arrayLength)

    for (let i = 0; i< arrayLength; i++) {
        reversedArray[i] = originalArray[arrayLength-i-1]
    }

    let reversedString = reversedArray.join('')

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
