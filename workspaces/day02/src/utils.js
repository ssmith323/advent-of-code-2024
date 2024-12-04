const ALLOWED_INCREASE_LIMITS = [3, 1, 2]
const ALLOWED_DECREASE_LIMITS = [-1, -3, -2]

const parseDay2 = (lineArr, tries = 0) => {
  let line = [...lineArr]
  let isAllowed = true
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
    } else if (!isAllowed) {
      return 0
    }

    return tries == 0
      ? parseDay2(line.splice(i, 1), 1) || parseDay2(line.splice(i + 1, 1), 1)
      : 0
  }
  return 1
}

module.exports = {
  parseDay2,
}
