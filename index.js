exports.showExampleMessage = function () {
  return 'This is an example message from the example package.'
}

var reverseString = function (s) {
  return s.split('').reverse().join('')
}
module.exports.reverseString = reverseString
