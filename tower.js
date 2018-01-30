// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

function towerBuilder(nFloors) {
  const tower = [];
  const space = nFloors * 2 - 1
  for (let i = 0, j = 1; i < nFloors; i++){
    let buffer = ' '.repeat((space - i - j) / 2)
    tower.push(buffer + '*'.repeat(i + j) + buffer)
    j++
  }
  return tower
}
