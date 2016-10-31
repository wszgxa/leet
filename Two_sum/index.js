var testCase = require('./test_case.js').case

var twoSum = function(array, target) {
  for (var i = 0; i<array.length; i++) {
    for(var j = i+1; j< array.length; j++) {
      if (array[i]+array[j] === target) return [i, j]
    }
  }
  return null
}
for (var z = 0; z < testCase.length; z++) {
  console.log(twoSum(testCase[z].array, testCase[z].target))
}