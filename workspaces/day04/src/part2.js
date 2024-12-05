const { getCommands } = require('../../util/src/file.js')
const { samDL, samDR, masDL, masDR } = require('./part2Utils.js')
require('../../util/src/array.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  const map = input.map((line) => line.split(''))
  let count = 0
  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map[i].length - 1; j++) {
      if (map[i][j] === 'A') {
        const mas1 = masDL(map, { x: j, y: i })
        const mas2 = masDR(map, { x: j, y: i })
        const mas3 = samDR(map, { x: j, y: i })
        const mas4 = samDL(map, { x: j, y: i })

        mas1 && mas2 && count++
        mas1 && mas3 && count++
        mas4 && mas3 && count++
        mas4 && mas2 && count++
      }
    }
  }
  return count
}

module.exports = { part2 }
