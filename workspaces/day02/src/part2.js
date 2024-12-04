const { getCommands } = require('../../util/src/file.js')
const { parseDay2 } = require('./utils.js')
require('../../util/src/array.js')

// const part2 = (filename) => {
//   const input = getCommands(filename)
//   return input
//     .map((line) => line.split(' '))
//     .map(parseDay2)
//     .sum()
// }

function isSafe(levels) {
  const differences = []

  for (let i = 1; i < levels.length; i++) {
    differences.push(levels[i] - levels[i - 1])
  }

  const increasing = differences.every((d) => d >= 1 && d <= 3)
  const decreasing = differences.every((d) => d <= -1 && d >= -3)

  return increasing || decreasing
}

function part2(filename) {
  const input = getCommands(filename)

  const reports = input.map((line) => line.split(' ').map(Number))

  let safe = 0
  let madeSafe = 0

  for (const report of reports) {
    let tolerable = false

    for (let i = 0; i < report.length; i++) {
      const removed = [...report.slice(0, i), ...report.slice(i + 1)]

      if (isSafe(removed)) {
        tolerable = true
        break
      }
    }

    if (isSafe(report)) safe++
    if (isSafe(report) || tolerable) madeSafe++
  }

  return [safe, madeSafe]
}

module.exports = { part2 }
