
function mix(s1, s2) {
  let returnVal = ''
  let alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  alphas.forEach((char) => {
    let regex = new RegExp(char, 'g')
    let s1count = s1.match(regex) || []
    let s2count = s2.match(regex) || []
    let frequency = s1count.length > s2count.length ? s1count : s2count
    if (frequency.length > 1){
      if (s1count.length > s2count.length){
        returnVal += '1:'
      }
      else if (s1count.length < s2count.length){
        returnVal += '2:'
      }
      else {
        returnVal += '=:'
      }
      returnVal += frequency.join('') + '/'
    }
  })
  returnVal = returnVal.slice(0, -1).split('/')
  returnVal = returnVal.sort((a,b) => b.length - a.length)
  let newArr = []
  let biggest = returnVal[0].length
  while (biggest > 1){
    returnVal.forEach((a) => {
      if (a[0] === '1' && a.length === biggest){
        newArr.push(a)
      }
    });
    returnVal.forEach((a) => {
      if (a[0] === '2' && a.length === biggest){
        newArr.push(a)
      }
    })
    returnVal.forEach((a) => {
      if (a[0] === '=' && a.length === biggest){
        newArr.push(a)
      }
    })
    biggest--
  }
  return newArr.join('/')
}

