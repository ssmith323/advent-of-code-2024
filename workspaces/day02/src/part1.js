const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const ALLOWED_INCREASE_LIMITS = [3, 1, 2]
const ALLOWED_DECREASE_LIMITS = [-1, -3, -2]

const part1 = (filename) => {
  const input = getCommands(filename)
  return input
    .map((line) => line.split(' '))
    .map((line) => {
      let a = null
      for (let i = 0; i < line.length - 1; i++) {
        const diff = line[i] - line[i + 1]
        if (
          ALLOWED_INCREASE_LIMITS.includes(diff) &&
          (a == null || a === 'INCREASING')
        ) {
          a = 'INCREASING'
          continue
        } else if (
          ALLOWED_DECREASE_LIMITS.includes(diff) &&
          (a == null || a === 'DECREASING')
        ) {
          a = 'DECREASING'
          continue
        }
        return 0
      }
      return 1
    })
    .sum()
}

module.exports = { part1 }
