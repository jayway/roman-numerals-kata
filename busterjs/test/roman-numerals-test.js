/*
 * Documentation:
 * http://docs.busterjs.org/en/latest/
 */
var buster = require('buster');
var decimalToRoman = require('../lib/roman-numerals');

/*
If you want to use spec style syntax:
describe("My thing", function () {
    it("has the foo and bar", function () {
        expect("foo").toEqual("bar");
    });

it can be enabled with
buster.spec.expose();
*/

buster.testCase('decimalToRoman', {
    'returns I for 1': function () {
        assert.equals(decimalToRoman(1), 'I');
    },
    'returns XX for 20': function() {
        assert.equals(decimalToRoman(20), 'XX');
    },
    'returns XL for 40': function() {
        assert.equals(decimalToRoman(40), 'XL');
    },
    'returns XLIX for 49': function() {
        assert.equals(decimalToRoman(50), 'XLIX');
    },
    'returns L for 50': function() {
        assert.equals(decimalToRoman(50), 'L');
    },
    'returns C for 100': function() {
        assert.equals(decimalToRoman(100), 'C');
    },
    'returns D for 500': function() {
        assert.equals(decimalToRoman(500), 'D');
    },
    'returns M for 1000': function() {
        assert.equals(decimalToRoman(1000), 'M');
    },

    'returns MMMM for 4000': function() {
        assert.equals(decimalToRoman(4000), 'MMMM');
    }
});
