var romans = {
    'M' : {
        value: 1000,
        maxStreak: 3,
        nextValue: 'CM',
        beforeValue: null
    },
    'D': {
        value: 500,
        maxStreak: 1,
        nextValue: null,
        beforeValue: null
    },
    'C' : {
        value: 100,
        maxStreak: 3,
        nextValue: 'XC',
        beforeValue: 'CD'
    },
    'L': {
        value: 50,
        maxStreak: 1,
        nextValue: null,
        beforeValue: null
    },
    'X' : {
        value: 10,
        maxStreak: 3,
        nextValue: 'IX',
        beforeValue: 'XL'
    },
    'V': {
        value: 5,
        maxStreak: 1,
        nextValue: null,
        beforeValue: 'IX'
    },
    'I': {
        value: 1,
        maxStreak: 3,
        nextValue: null,
        beforeValue: 'IV'
    }
};

function calc(number,element,key) {
    var roman='';
    var cont = true;
    console.log('----------');
    console.log(element.value+" "+ element.maxStreak +" "+element.nextValue);
    while (cont) {
        if (element.maxStreak===1) cont = false;

        if (!element.nextValue && number / element.value >= 1 ) {
            if (number % element.value >= 4) {
                roman+=element.beforeValue;
                number -= element.value*2-1;
                cont = false;
            }
        }
        if (element.beforeValue && number / element.value >= 4) {
            roman+=element.beforeValue;
            if (!element.nextValue) number -= element.value*2-1;
            else
            number -= element.value*4;
            cont = false;
        }
        else if (number / element.value >= 1) {
            roman+=key;
            number -= element.value;
        }
        else if (element.nextValue && number / (element.value-(element.value/10)) >= 1) {
            roman+=element.nextValue;
            number -= (element.value-(element.value/10));
        }
        else {
            cont = false;
        }
    }
    console.log(roman);
    return [roman,number];
}

var _ = require("underscore");

function decimalToRoman(number) {
    var roman = '';

    if (number === 0) {
        return 'nothing';
    }
    var roman = '';
    _.each(romans, function(element,key){
        //console.log(element,key);
         var ret = calc(number,element,key);
        number=ret[1];
        roman+=ret[0];
    });

    return roman;

}

module.exports = decimalToRoman;
