const { reverseString } = require('./reverseString');

it('shoud return ba', () => {
	expect(reverseString('ab')).toBe('ba');
});

it('should return a string', () => {
	expect(typeof reverseString('test')).toBe('string');
});
