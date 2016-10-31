var testString = require('./test_case').testString

var longestPalindrome = function (s) {
  var resString = s.slice(0, 1)
  for (var i = 0; i< s.length; i++) {

    if (resString.length > s.slice(i).length) break
    for (j = 1; i-j >= 0; j++) {
      if (s.slice(i+j, i+j+1) === '') break
      if (s.slice(i-j, i-j+1) === s.slice(i+j, i+j+1)) {
        if (s.slice(i-j, i+j+1).length > resString.length) {
          resString = s.slice(i-j, i+j+1)
        }
      } else {
        break
      }
    }
  }
  return resString
}

console.log(longestPalindrome(testString[1]))