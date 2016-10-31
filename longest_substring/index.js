var testString = require('./test_case.js').testString

var lengthOfLongestSubstring = function (s) {
  var resString = s.slice(0, 1)
  for (var i = 0; i<s.length; i++) {
    for (var j = i+1; j<=s.length; j++) {

      if (s.slice(i, j-1).includes(s.slice(j-1, j))) break

      if (resString.length < s.slice(i, j).length) { 
        resString = s.slice(i, j)
      }

    }
  }
  return resString.length
}

for (var i = 0; i < testString.length; i++) {
  console.log(lengthOfLongestSubstring(testString[i]))
}