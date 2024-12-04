const { part2 } = require('../part2.js')

test('test file', () => expect(part2('./workspaces/day02/test.txt')).toBe(4))
test('input file', () => expect(part2('./input.txt')).toBe(55902))
