const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  const map = input.map((line) => line.split(''))
  let count = 0
  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map[i].length - 1; j++) {
      if (map[i][j] === 'A') {
        if (
          map[i - 1][j - 1] === 'M' &&
          map[i + 1][j + 1] === 'S' &&
          map[i - 1][j + 1] === 'M' &&
          map[i + 1][j - 1] === 'S'
        ) {
          count++
        }

        if (
          map[i - 1][j - 1] === 'M' &&
          map[i + 1][j + 1] === 'S' &&
          map[i - 1][j + 1] === 'S' &&
          map[i + 1][j - 1] === 'M'
        ) {
          count++
        }

        if (
          map[i - 1][j - 1] === 'S' &&
          map[i + 1][j + 1] === 'M' &&
          map[i - 1][j + 1] === 'S' &&
          map[i + 1][j - 1] === 'M'
        ) {
          count++
        }

        if (
          map[i - 1][j - 1] === 'S' &&
          map[i + 1][j + 1] === 'M' &&
          map[i - 1][j + 1] === 'M' &&
          map[i + 1][j - 1] === 'S'
        ) {
          count++
        }
      }
    }
  }
  return count
}

module.exports = { part2 }
