'use strict'

// Set BABEL_ENV to use proper preset config
process.env.BABEL_ENV = 'testing-e2e'

// Enable use of es2015 on required files
require('babel-register')({
  ignore: /node_modules/
})

// Attach Chai APIs to global scope
const chai = require('chai')

chai.use(require('chai-as-promised'))

global.expect = chai.expect
global.should = chai.should
global.assert = chai.assert

// Require all JS files in `./specs` for Mocha to consume
require('require-dir')('./specs')
