function decimalToRoman(number) {
    if (number === 0) {
        return 'nothing';
    } else if (number === 1) {
        return 'I';
    } else return undefined;
}

module.exports = decimalToRoman;
