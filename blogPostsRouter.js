const express = require('express')
const {BlogPosts} = require('./models.js')
const blogPostsRouter = express.Router()

const starterPost = BlogPosts.create("First post", "This is a filler post", "Fake Author")
const secondStarterPost = BlogPosts.create("Second post", "This is a filler post", "Fake Author")


blogPostsRouter.post('/',(req,res,next) => {
    let newPost = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate)
    res.send(newPost)


    next()

})

blogPostsRouter.get('/',(req,res,next) => {
    res.send(BlogPosts.posts)


    next()
})

blogPostsRouter.put('/:id',(req,res,next) => {

    BlogPosts.update(req.body)
    res.send(BlogPosts.posts)




    next()

})

blogPostsRouter.delete('/:id' , (req,res,next) => {
    BlogPosts.delete(req.params.id)
    res.send(BlogPosts.posts)


    next()

})





module.exports = blogPostsRouter