const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const part1 = (filename) => {
  const input = getCommands(filename)
  const map = input.map((line) => line.split(''))
  let count = 0
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'X') {
        if (
          map[i].length - 3 > j &&
          map[i][j + 1] === 'M' &&
          map[i][j + 2] === 'A' &&
          map[i][j + 3] === 'S'
        ) {
          count++
        }
        if (
          j >= 3 &&
          map[i][j - 1] === 'M' &&
          map[i][j - 2] === 'A' &&
          map[i][j - 3] === 'S'
        ) {
          count++
        }
        if (
          i >= 3 &&
          map[i - 1][j] === 'M' &&
          map[i - 2][j] === 'A' &&
          map[i - 3][j] === 'S'
        ) {
          count++
        }
        if (
          map.length - 3 > i &&
          map[i + 1][j] === 'M' &&
          map[i + 2][j] === 'A' &&
          map[i + 3][j] === 'S'
        ) {
          count++
        }

        if (
          i >= 3 &&
          j >= 3 &&
          map[i - 1][j - 1] === 'M' &&
          map[i - 2][j - 2] === 'A' &&
          map[i - 3][j - 3] === 'S'
        ) {
          count++
        }
        if (
          map.length - 3 > i &&
          map[i].length - 3 > j &&
          map[i + 1][j + 1] === 'M' &&
          map[i + 2][j + 2] === 'A' &&
          map[i + 3][j + 3] === 'S'
        ) {
          count++
        }

        if (
          map.length - 3 > i &&
          j >= 3 &&
          map[i + 1][j - 1] === 'M' &&
          map[i + 2][j - 2] === 'A' &&
          map[i + 3][j - 3] === 'S'
        ) {
          count++
        }
        if (
          i >= 3 &&
          map[i].length - 3 > j &&
          map[i - 1][j + 1] === 'M' &&
          map[i - 2][j + 2] === 'A' &&
          map[i + -3][j + 3] === 'S'
        ) {
          count++
        }
      }
    }
  }
  return count
}

module.exports = { part1 }
