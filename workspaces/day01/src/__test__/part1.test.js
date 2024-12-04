const { part1 } = require('../part1.js')

test('test file', () => expect(part1('./test.txt')).toBe(11))
test('input file', () => expect(part1('./input.txt')).toBe(1941353))
