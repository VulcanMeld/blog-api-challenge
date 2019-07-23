const {app, runServer, closeServer} = require('../server')

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe('')