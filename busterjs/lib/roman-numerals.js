function decimalToRoman(number) {
    /*if (number === 0) {
        return 'nothing';
    } else if (number === 1) {
        return 'I';
    } else return undefined;
      */
    var roman = '';
    if (number === 0) {
        return 'nothing';
    }
    var cont = true;
    while (cont) {
        if (number / 1000 >= 1) {
            roman+='M';
            number -= 1000
        }
        else {
            cont = false;
        }
    }
    if (number / 500 >= 1) {
        roman+='D';
        number -= 500;
    }
    var cont = true;
    while (cont) {
        if (number / 100 >= 4) {
            roman+='CD';
            number -= 400;
            cont = false;
        }
        else if (number / 100 >= 1) {
            roman+='C';
            number -= 100
        }
        else {
            cont = false;
        }
    }

    if (number / 50 >= 1) {
        if (number % 50 >= 4) {
            roman+='IL';
            number -= 49;
            cont = false;
        }
        roman+='L';
        number -= 50;
    }

    var cont = true;
    while (cont) {
        if (number / 10 >= 4) {
            roman+='XL';
            number -= 40;
            cont = false;
        }
        else if (number / 10 >= 1) {
            roman+='X';
            number -= 10;
        }
        else {
            cont = false;
        }
    }

    if (number / 5 >= 1 ) {
        if (number % 5 >= 4) {
            roman+='IX';
            number -= 9;
            cont = false;
        }
        else {
            roman+='V';
            number -= 5;
        }
    }

    var cont = true;
    while (cont) {
        if (number / 1 >= 4) {
            roman+='IV';
            number -= 4;
            cont = false;
        }
        else if (number >= 1) {
            roman+='I';
            number -= 1;
        }
        else {
            cont = false;
        }
    }


    return roman;
    /*500
    100
    50
    10
    5
    1 */
}

module.exports = decimalToRoman;
