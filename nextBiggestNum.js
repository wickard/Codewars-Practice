function nextBigger(num){
  let numbers = num.toString().split('')
  for (let i = numbers.length - 1; i > 0; i--){
    if (numbers[i] > numbers[i - 1]){
      let front = numbers.slice(0, i - 1)
      let back = numbers.slice(i)
      let splitPoint = numbers[i - 1]
      back.sort()
      let toSwap = 0
      for (let j = 0; j < back.length; j++){
        if (Number(back[j]) > Number(splitPoint)){
          toSwap = back[j]
          break
        }
      }
      let swapped = back.splice(back.indexOf(toSwap), 1)
      back.push(splitPoint)
      back.sort()
      front = front.concat(swapped)
      return Number(front.concat(back).join(''))
    }
  }
  return -1
}

