const express = require('express')
const blogPostsRouter = express.Router()

blogPostsRouter.post('/')

blogPostsRouter.get('/')

blogPostsRouter.put('/:id')

blogPostsRouter.delete('/:id')





module.exports = blogPostsRouter