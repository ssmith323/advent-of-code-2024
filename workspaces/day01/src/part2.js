const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')
const { getNumbers } = require('./util.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  const arrayOfNumbers = input.map(getNumbers).reduce(
    (prev, [first, second]) => ({
      first: [...prev.first, +first],
      second: prev.second.set(+second, (prev.second.get(+second) || 0) + 1),
    }),
    { first: [], second: new Map() }
  )
  arrayOfNumbers.first.sort()

  return arrayOfNumbers.first
    .map((item) => Math.abs((arrayOfNumbers.second.get(item) || 0) * item))
    .sum()
}

module.exports = { part2 }
