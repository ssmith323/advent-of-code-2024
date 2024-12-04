const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const MUL_REGEX = /(don't\(\).*?(do\(\)))|(don't\(\).*?$)|(mul\(\d+,\d+\))/g

const part2 = (filename) => {
  const input = getCommands(filename)
  return input
    .join('')
    .match(MUL_REGEX)
    .filter((l) => l.charAt(0) !== 'd')
    .map((mul) => mul.match(/\d+/g).multiply())
    .sum()
}

module.exports = { part2 }
