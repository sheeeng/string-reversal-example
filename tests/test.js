var assert = require('assert')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('Message', function () {
  describe('#getExampleMessage()', function () {
    it('should get example message', function () {
      var stringreversal = require('../index.js')
      var testString1 = 'This is an example message from the example package.'
      assert.equal(testString1, stringreversal.getExampleMessage())
    })
  })
})

describe('Reverse', function () {
  describe('#reverseString()', function () {
    it('should reverse the string', function () {
      var stringreversal = require('../index.js')
      var testString1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      var reversedTestString1 = '.tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL'
      assert.equal(stringreversal.reverseString(testString1), reversedTestString1)
    })
  })
})
