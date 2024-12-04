const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')
const { getNumbers } = require('./util.js')

const part1 = (filename) => {
  const input = getCommands(filename)
  const arrayOfNumbers = input.map(getNumbers).reduce(
    (prev, [first, second]) => ({
      first: [...prev.first, +first],
      second: [...prev.second, +second],
    }),
    { first: [], second: [] }
  )
  const sortedArray = {
    first: arrayOfNumbers.first.sort(),
    second: arrayOfNumbers.second.sort(),
  }
  return sortedArray.first
    .map((item, i) => Math.abs(sortedArray.second[i] - item))
    .sum()
}

module.exports = { part1 }
