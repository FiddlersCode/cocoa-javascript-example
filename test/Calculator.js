const chai = require('chai');

const { expect } = chai;

const Calculator = require('../src/Calculator');


describe('test eq method', () => {
    describe('addition method', () => {
        it('should add 2 numbers', () => {
            const actual = Calculator.add(1, 2);
            const expected = 3;
            expect(expected).to.eq(actual);
        });

        it('should add 2 numbers', () => {
            const actual = Calculator.add(2, 2);
            const expected = 4;
            expect(expected).to.eq(actual);
        });
    });
});
