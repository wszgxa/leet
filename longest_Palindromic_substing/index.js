var testString = require('./test_case').testString

var longestPalindrome = function (s) {
  var a = s.split('')
  var resString = a.slice(0, 1)
  var judgePalindrome = function (ss) {
    var tag = ss
    while (tag.length >= 2 ) {
      if (tag.pop() !== tag.shift()) return false
    }
    return true
  }
  for (var i = 0; i < a.length; i++) {
    if (resString.length >= a.slice(i).length) break
    for (var j = i+1; j <= a.length; j++) {
      var sub = a.slice(i,j)
      if (sub.length <= resString.length) continue
      if (judgePalindrome(sub)) {
        resString = a.slice(i,j)
      }
    }
  }
  return resString.join('')
}


for (var i = 0; i < testString.length; i++) {
  console.log(longestPalindrome(testString[i]))
}