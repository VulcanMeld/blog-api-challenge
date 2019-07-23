const chai = require('chai')
const chaiHttp = require('chai-http')

const {app, runServer, closeServer} = require('../server')


const expect = chai.expect

chai.use(chaiHttp)

describe('blog-posts', function() {
    before(function(){
        return runServer()
    })


    after(function(){
        return closeServer()
    })


    it('should return an array of blog post objects' , function(){
        return chai.request(app)
        .get('/blog-posts')
        .then(function(res){
            expect(res.body).to.have.lengthOf.at.least(2)
            expect(res.body).to.be.an('array')

        })
    })
})