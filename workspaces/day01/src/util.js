const getNumbers = (line) => {
  const arr = line.split('   ')
  return [arr[0], arr[1]]
}

module.exports = { getNumbers }
