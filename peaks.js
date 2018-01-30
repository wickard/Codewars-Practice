function pickPeaks(arr){
  const peaks = {
    pos: [],
    peaks: []
  }
  let currentPeak = null
  for (let i = 1; i < arr.length - 1; i++){
    if (arr[i] > arr[i - 1]){
        currentPeak = arr[i]
    }
    if (currentPeak > arr[i + 1]){
      peaks.peaks.push(currentPeak)
      peaks.pos.push(i)
      currentPeak = null
    }
    if (currentPeak === arr[i + 1]){
      let j = i
      while (currentPeak === arr[j]){
        j++
      }
      if (arr[j] && currentPeak > arr[j]){
        peaks.peaks.push(currentPeak)
        peaks.pos.push(i)
        currentPeak = null
        i = j
      }
    }
  }
  return peaks
}

