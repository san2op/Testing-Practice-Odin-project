
import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from '../src/index.js';
//const {capitalize, reverseString, calculator} = require('../src/index.js')



describe('capitalize', () => {
    test('takes a string and returns it with the first character capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    test('does not modify already capitalize first letter', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
    test('capitalize if there only a single character', () => {
        expect(capitalize('h')).toBe('H');
    });
    test('handle empty string', () => {
        expect(capitalize('')).toBe('');
    })
});

describe('reverseString', () => {
    test('takes a string and returns it reversed', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('handle corectly a string with punctuation', () => {
        expect(reverseString('Hello!')).toBe('!olleH');
    });
    test('handles cerrectly if there only a single character', () => {
        expect(reverseString('h')).toBe('h');
    });
    test('handle empty string', () => {
        expect(reverseString('')).toBe('');
    })
});

describe('calculator', () => {
    test('add two number and return a result', () => {
        expect(calculator.add(2,3)).toBe(5);
    });
    test('substract two number and return a result', () => {
        expect(calculator.subtract(5,2)).toBe(3);
    });
    test('multiply two number and return a result', () => {
        expect(calculator.multiply(2,5)).toBe(10);
    });
    test('divide two number and return a result', () => {
        expect(calculator.divide(10,2)).toBe(5);
    });
    test('divide two zero and return a result', () => {
        expect(calculator.divide(0,10)).toBe(0);
    });
});

describe('caesarCipher', () => {
    test('shifts each character by the shift factor ', () => {
        expect(caesarCipher('hello world',3)).toBe('khoor zruog');
    });
    test('test wrap from z to a', () => {
        expect(caesarCipher('z',1)).toBe('a');
    });
    test('handles the case of the character', () => {
        expect(caesarCipher('Hello world',3)).toBe('Khoor zruog');
    });
    test('handles punctuation', () => {
        expect(caesarCipher('Hello world!',3)).toBe('Khoor zruog!');
    });
});

describe('analyzeArray', () => {
    test('returns the average, min, max, and length of array ', () => {
        expect(analyzeArray([1,2,3,4,5,6,7])).toEqual({
            average: 4,
             min: 1, 
             max: 7, 
             length: 7 ,
        });
    });
});
    test('returns the average, min, max, and length of array with negative numbers ', () => {
        expect(analyzeArray([-1,0,1])).toEqual({
            average: 0,
            min: -1,
            max: 1,
            length: 3,
        });
    });
        test('handle empty array ', () => {
            expect(analyzeArray([])).toEqual({
                average: NaN,
                min: Infinity,
                max: -Infinity,
                length: 0,
    });   
});
