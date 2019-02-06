import XError from '../index';

test('valid custom error type', () => {
	let error = new XError('000');
	expect(error instanceof Error).toBe(true);
});
