var assert = require('assert')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('Messages', function () {
  describe('#echoMockMessage()', function () {
    it('should get mock message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString1 = 'This is an example message from the example package.'
      assert.equal(mockString1, emm.echoMockMessage())
    })
  })
  describe('#echoRedFiveStandingBy()', function () {
    it('should get another message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString2 = 'Red Five standing by.'
      assert.equal(mockString2, emm.echoRedFiveStandingBy())
    })
  })
  describe('#echoFeelTheForce()', function () {
    it('should get yet another message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString3 = 'Feel the Force!'
      assert.equal(mockString3, emm.echoFeelTheForce())
    })
  })
})

describe('Reversal', function () {
  describe('#reverseString()', function () {
    it('should reverse the string', function () {
      var rs = require('../app/reverse-string.js')
      var mockString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      var reversedMockString = '.tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL'
      assert.equal(rs.reverseString(mockString), reversedMockString)
    })
  })
})
