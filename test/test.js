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
  describe('#echoLoremIpsum()', function () {
    it('should get lorem ipsum mock message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      assert.equal(mockString2, emm.echoLoremIpsum())
    })
  })
  describe('#echoRedFiveStandingBy()', function () {
    it('should get another message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString3 = 'Red Five standing by.'
      assert.equal(mockString3, emm.echoRedFiveStandingBy())
    })
  })
  describe('#echoFeelTheForce()', function () {
    it('should get yet another message', function () {
      var emm = require('../app/echo-mock-messages.js')
      var mockString4 = 'Feel the Force!'
      assert.equal(mockString4, emm.echoFeelTheForce())
    })
  })
})

describe('Reversal', function () {
  describe('#reverseMockMessage()', function () {
    it('should reverse the string', function () {
      var rs = require('../app/reverse-string.js')
      var emm = require('../app/echo-mock-messages.js')
      var reversedMockString1 = ".egakcap elpmaxe eht morf egassem elpmaxe na si sihT"
      assert.equal(rs.reverseString(emm.echoMockMessage()), reversedMockString1)
    })
  })
  describe('#reverseLoremIpsum()', function () {
    it('should reverse the string', function () {
      var rs = require('../app/reverse-string.js')
      var emm = require('../app/echo-mock-messages.js')
      var reversedMockString2= '.tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL'
      assert.equal(rs.reverseString(emm.echoLoremIpsum()), reversedMockString2)
    })
  })
  describe('#reverseRedFiveStandingBy()', function () {
    it('should reverse the string', function () {
      var rs = require('../app/reverse-string.js')
      var emm = require('../app/echo-mock-messages.js')
      var reversedMockString3 = ".yb gnidnats eviF deR"
      assert.equal(rs.reverseString(emm.echoRedFiveStandingBy()), reversedMockString3)
    })
  })
  describe('#reverseFeelTheForce()', function () {
    it('should reverse the string', function () {
      var rs = require('../app/reverse-string.js')
      var emm = require('../app/echo-mock-messages.js')
      var reversedMockString4 = "!ecroF eht leeF"
      assert.equal(rs.reverseString(emm.echoFeelTheForce()), reversedMockString4)
    })
  })
})
