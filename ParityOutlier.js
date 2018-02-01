// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  let oddnum = null;
  let evennum = null;
  let odd = 0
  let even = 0
  for (var i = 0; i < integers.length; i++){
    if (integers[i] % 2 === 0){
      evennum = integers[i]
      even++
    }
    else {
      oddnum = integers[i]
      odd++
    }
    if (even > 1 && oddnum){
      return oddnum
    }
    if (odd > 1 && evennum !== null){
      return evennum
    }
  }
}
