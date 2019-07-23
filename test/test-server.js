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
            const expectedKeys = ["id","title","content","author","publishDate"]
            res.body.forEach(function(post){
                expect(post).to.include.keys(expectedKeys)

            })

        })
    })

    it('should add a new blog post to list of posts and then return the new post', function(){
        const testPost = {"title": "Test Post", "content": "This is a test.", "author": "Sir TestALot"}
        return chai.request(app)
        .post('/blog-posts')
        .send(testPost)
        .then(function(res){
            expect(res.body).to.be.an('object')
            const expectedKeys = ["id","title","content","author","publishDate"]
            expect(res.body).to.include.keys(expectedKeys)

        })
    })

    it('should update a post in the list of posts then return updated post', function(){
        const updatedPost = {"title":"Updated","content": "This is updated content."}
        return chai.request(app)
        .get('/blog-posts')
        .then(function(res) {
            updatedPost.id = res.body[0].id
            return chai.request(app)
            .put(`/blog-posts/${updatedPost.id}`)
            .send(updatedPost)
            .then(function(res){
                expect(res.body[0]).to.be.an('object')
                const expectedKeys = ["id","title","content","author","publishDate"]
                expect(res.body[0]).to.include.keys(expectedKeys)
                expect(res.body[0].title).to.equal(updatedPost.title)
                expect(res.body[0].content).to.equal(updatedPost.content)
                
            })

        })
    })
})