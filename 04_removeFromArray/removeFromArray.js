const removeFromArray = function(...Args) {
    for (let i = 1; i<Args.length; i++) {
        Args[0] = Args[0].filter((arrayElement) => arrayElement !== Args[i]);
    }

    return Args[0]
};

// Do not edit below this line
module.exports = removeFromArray;
