const { Calculator } = require('./calculator');
const assert = require('assert');

describe('2 + 2', () => {
	const calculator = new Calculator(2, 2);

	it('should return a number for adding', () => {
		expect(typeof calculator.add()).toBe('number');
	});

	it('should return 4', () => {
		expect(calculator.add()).tobe(4);
	});

	it('should be less than 5', () => {
		expect(calculator.add()).tobelessthan(5);
	});
});

describe('2 * 2', () => {
	const calculator = new Calculator(2, 2);

	it('should return a number for', () => {
		expect(typeof calculator.multiply()).toBe('number');
	});

	it('should return 4', () => {
		expect(calculator.multiply()).tobe(4);
	});

	it('should be less than 5', () => {
		expect(calculator.multiply()).tobelessthan(5);
	});
});

describe('2 - 2', () => {
	const calculator = new Calculator(2, 2);

	it('should return a number for', () => {
		expect(typeof calculator.substract()).toBe('number');
	});

	it('should return 0', () => {
		expect(calculator.substract()).tobe(0);
	});

	it('should be less than 1', () => {
		expect(calculator.substract()).tobelessthan(1);
	});
});

describe('2 / 2', () => {
	const calculator = new Calculator(2, 2);

	it('should return a number for', () => {
		expect(typeof calculator.divide()).toBe('number');
	});

	it('should return 1', () => {
		console.log(calculator.divide());
		expect(calculator.divide()).tobe(1);
	});

	it('should be less than 2', () => {
		expect(calculator.divide()).tobelessthan(2);
	});
});
