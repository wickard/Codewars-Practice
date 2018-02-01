// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// For example:

//   var cakeTypes = [
//     {weight: 7, value: 160},
//     {weight: 3, value: 90},
//     {weight: 2, value: 15},
// ];

// var capacity = 20;

// maxDuffelBagValue(cakeTypes, capacity);
// // returns 555 (6 of the middle type of cake and 1 of the last type of cake)

// ----------- "unbounded knapsack problem" -------------//

const maxDuffelBagValue = (cakeTypes, capacity) => {
  let totalValue = 0;
  if (!capacity){
    return 0;
    //what if you have cake that weights 0?
  }
  for (let i in cakeTypes){
    if (cakeTypes[i].weight === 0){
      return Infinity;
      //what if value is also 0 ?
    }
    cakeTypes[i].unitVal = cakeTypes[i].value / cakeTypes[i].weight
  }
  cakeTypes.sort((a,b) => b.unitVal - a.unitVal);
  for (let i = 0; capacity > 0 && i < cakeTypes.length; i++){
    let cake = cakeTypes[i]
    let numCakes = Math.floor(capacity / cake.weight)
    totalValue += cake.value * numCakes
    capacity -= cake.weight * numCakes
  }
  return totalValue
}

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

//fails with certain capacities
//try bottom up approach get greedy
//need to check max value at every weight

// Sometimes an efficient, good answer might be more practical than an inefficient, optimal answer.
// traveling salesman problem... above would be more effeciant than checking max val at every weight

