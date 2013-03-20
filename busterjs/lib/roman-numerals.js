var romans = {
    'M' : [1000,3,'CM'],
    'D' : [500,1],
    'C' : [100,3,'XC','CD'],
    'L' : [50,1],
    'X' : [10,3,'IX','XL'],
    'V' : [5,1,null,'IX'],
    'I' : [1,3,null,'IV']
};

function calc(number,element,key) {
    var roman='';
    var cont = true;
    var value = element[0];
    var max = element[1];
    var nextValue = element[2];
    var beforeValue = element[3];
    console.log(value+" "+ max +" "+nextValue);
    while (cont) {
        if (max===1) cont = false;

        if (!nextValue && number / value >= 1 ) {
            if (number % value >= 4) {
                roman+=beforeValue;
                number -= value*2-1;
                cont = false;
            }
        }
        if (beforeValue && number / value >= 4) {
            roman+=beforeValue;
            console.log("adding:"+beforeValue);
            if (!nextValue) number -= value*2-1;
            else
            number -= value*4;
            cont = false;
        }
        else if (number / value >= 1) {
            roman+=key;
            number -= value;
        }
        else if (nextValue && number / (value-(value/10)) >= 1) {
            roman+=nextValue;
            number -= (value-(value/10));
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
        var ret = calc(number,element,key);
        number=ret[1];
        roman+=ret[0];
    });

    return roman;

}

module.exports = decimalToRoman;
