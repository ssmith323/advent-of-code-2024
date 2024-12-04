const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  const map = input.map((line) => line.split(''))
  let count = 0
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (
        i >= 3 &&
        j >= 3 &&
        map.length - 3 > i &&
        map[i].length - 3 > j &&
        map[i][j] === 'X'
      ) {
        if (
          map[i - 1][j - 1] === 'M' &&
          map[i - 2][j - 2] === 'A' &&
          map[i - 3][j - 3] === 'S' &&
          map[i + 1][j + 1] === 'M' &&
          map[i + 2][j + 2] === 'A' &&
          map[i + 3][j + 3] === 'S'
        ) {
          count++
        }
        if (
          map[i + 1][j + 1] === 'M' &&
          map[i + 2][j + 2] === 'A' &&
          map[i + 3][j + 3] === 'S'
        ) {
          count++
        }

        if (
          map[i + 1][j - 1] === 'M' &&
          map[i + 2][j - 2] === 'A' &&
          map[i + 3][j - 3] === 'S'
        ) {
          count++
        }
        if (
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

module.exports = { part2 }
