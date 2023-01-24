const { capitalize } = require('./capitalize');

it('should return a capitalize text', () => {
	expect(capitalize('hans')).toBe('Hans');
});
