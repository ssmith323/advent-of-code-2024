const masDL = (map, position) => {
  return (
    map[position.y - 1][position.x - 1] === 'M' &&
    map[position.y + 1][position.x + 1] === 'S'
  )
}

const samDL = (map, position) => {
  return (
    map[position.y - 1][position.x - 1] === 'S' &&
    map[position.y + 1][position.x + 1] === 'M'
  )
}

const samDR = (map, position) => {
  return (
    map[position.y - 1][position.x + 1] === 'S' &&
    map[position.y + 1][position.x - 1] === 'M'
  )
}

const masDR = (map, position) => {
  return (
    map[position.y - 1][position.x + 1] === 'M' &&
    map[position.y + 1][position.x - 1] === 'S'
  )
}

module.exports = {
  masDL,
  masDR,
  samDL,
  samDR,
}
