/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) { //I am a fucking genius. I solved this myself without any hintssss
    var table = {
        0: 0,
        1: 1,
        2: 1,
        3: 2
    };
    var result = new Array(num + 1);

    for (var i = 0; i <= num; i++) {
        var bits = numberOfBits(i);
        result[i] = bits;
    }

    function numberOfBits(n) {
        if (table[n] !== undefined) {
            return table[n];
        }
        var number_of_bits;
        if (n % 2 === 0) {
            number_of_bits = 0 + numberOfBits(n >> 1);
        } else {
            number_of_bits = 1 + numberOfBits(n >> 1);
        }
        table[n] = number_of_bits;
        return number_of_bits;
    }

    return result;
};

// countBits(5);