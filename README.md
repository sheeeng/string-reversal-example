# string-reversal-example

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Travis CI](https://img.shields.io/travis/sheeeng/string-reversal-example/master.svg)](https://travis-ci.org/sheeeng/string-reversal-example)
[![npm Downloads](https://img.shields.io/npm/dm/string-reversal-example.svg)](https://www.npmjs.com/package/string-reversal-example)
[![npm Version](https://img.shields.io/npm/v/string-reversal-example.svg)](ttps://www.npmjs.com/package/string-reversal-example)

NodeJS example project to reverse string.

Do *not* use in production environment.

Usage:

    const sr = require('string-reversal-example')

    console.log(sr.echoMockMessage())
    console.log(sr.echoLoremIpsum())
    console.log(sr.echoRedFiveStandingBy())
    console.log(sr.echoFeelTheForce())

    console.log(sr.reverseString(sr.echoMockMessage()))
    console.log(sr.reverseString(sr.echoLoremIpsum()))
    console.log(sr.reverseString(sr.echoRedFiveStandingBy()))
    console.log(sr.reverseString(sr.echoFeelTheForce()))

Output:

    This is an example message from the example package.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Red Five standing by.
    Feel the Force!
    .egakcap elpmaxe eht morf egassem elpmaxe na si sihT
    .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL
    .yb gnidnats eviF deR
    !ecroF eht leeF
