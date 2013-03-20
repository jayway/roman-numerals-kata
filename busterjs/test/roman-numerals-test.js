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
    'returns nothing for 0': function () {
        assert.equals(decimalToRoman(0), 'nothing');
    },
    'returns I for 1': function () {
        assert.equals(decimalToRoman(1), 'I');
    },
    'returns II for 2': function () {
        assert.equals(decimalToRoman(2), 'II');
    },
    'returns II for 3': function () {
        assert.equals(decimalToRoman(3), 'III');
    },
    'returns II for 4': function () {
        assert.equals(decimalToRoman(4), 'IV');
    },
    'returns II for 5': function () {
        assert.equals(decimalToRoman(5), 'V');
    },
    'returns II for 6': function () {
        assert.equals(decimalToRoman(6), 'VI');
    },
    'returns II for 7': function () {
        assert.equals(decimalToRoman(7), 'VII');
    },
    'returns II for 8': function () {
        assert.equals(decimalToRoman(8), 'VIII');
    },
    'returns II for 9': function () {
        assert.equals(decimalToRoman(9), 'IX');
    },
    'returns II for 10': function () {
        assert.equals(decimalToRoman(10), 'X');
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
