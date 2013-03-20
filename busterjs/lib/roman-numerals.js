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
    /*console.log(value);
    console.log(max);
    console.log(nextValue);*/
    console.log(value+" "+ max +" "+nextValue);
    while (cont) {
        if (max===1) cont = false;

        if (beforeValue && number / value >= 4) {
            roman+=beforeValue;
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

/*
* if (number / 100 >= 4) {
 roman+='CD';
 number -= 400;
 cont = false;
 }
 else if (number / 100 >= 1) {
 roman+='C';
 number -= 100;
 }
 else if (number / 90 >= 1) {
 roman+='XC';
 number -= 90;
 }
 else {
 cont = false;
 }
* */
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

    /*var cont = true;
    while (cont) {
        if (number / 1000 >= 1) {
            roman+='M';
            number -= 1000
        }
        else if (number / 900 >= 1) {
            roman+='CM';
            number -= 900;
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
            number -= 100;
        }
        else if (number / 90 >= 1) {
            roman+='XC';
            number -= 90;
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
            roman+='X';
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
    }  */

    return roman;

}

module.exports = decimalToRoman;
