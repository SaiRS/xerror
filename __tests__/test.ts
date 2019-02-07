import XXError from '../src';

test('valid custom error type', () => {
	let error = new XXError('000');
	expect(error instanceof Error).toBe(true);
});
