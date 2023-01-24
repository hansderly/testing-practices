const stringLength = (string) => {
	const { length } = string;

	if (length < 1 || length > 10) throw new Error('error');

	return length;
};

module.exports = { stringLength };
