const { part2 } = require('../part2.js')

test('test file', () => expect(part2('./test2.txt')).toBe(48))
test('input file', () => expect(part2('./input.txt')).toBe(75920122))
