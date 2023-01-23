const { stringLength } = require('./app');

console.log(stringLength('ab'));
test('should return a number', () => {
	expect(stringLength('test')).toBe(4);
});
