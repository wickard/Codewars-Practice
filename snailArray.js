snail = function(array) {
  let snailArray = []
  while (array.length){
    while (array[0].length){
      snailArray.push(array[0].shift())
    }
    let i = 1
    while (i < array.length  && array[i].length){
      snailArray.push(array[i].pop())
      i++
    }
    while (array[i-1].length){
      snailArray.push(array[i - 1].pop())
    }
    let j = i - 2
    while (j > 0 && array[j].length){
      snailArray.push(array[j].shift())
      j--
    }
    array.shift()

  }
  return snailArray
}
