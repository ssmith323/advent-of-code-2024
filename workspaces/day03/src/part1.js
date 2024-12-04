const { getCommands } = require('../../util/src/file.js')
require('../../util/src/array.js')

const MUL_REGEX = /(mul\(\d+,\d+\))/g

const part1 = (filename) => {
  const input = getCommands(filename)
  return input
    .map((line) =>
      line.match(MUL_REGEX).map((mul) => mul.match(/\d+/g).multiply())
    )
    .flat()
    .sum()
}

module.exports = { part1 }
