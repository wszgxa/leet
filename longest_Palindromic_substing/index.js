var testString = require('./test_case').testString

var longestPalindrome = function (s) {
  var resString = s.slice(0, 1)
  var judgePalindrome = function (ss) {
    let tagArray = []
    for (var i = 0; i <= ss.length;i++) {
      tagArray.push(ss[i])
    }
  }
  return resString
}

for (var i = 0; i < testString.length; i++) {
  console.log(longestPalindrome(testString[i]))
}