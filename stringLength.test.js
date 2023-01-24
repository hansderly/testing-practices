const { stringLength } = require('./stringLength.js');

it('should return a number', () => {
	expect(stringLength('test')).toBe(4);
});

it('should be at last one character', () => {
	expect(stringLength('')).toThrow();
});

it('should be less than 10 characters', () => {
	expect(
		stringLength('A longer string that have more than 10 characters')
	).toThrow();
});
