const express = require('express')
const app = express()
const morgan = require('morgan')
const blogPostsRouter = ('./blogPostsRouter.js')

app.use(morgan("combined"))

app.use('/blog-posts', blogPostsRouter)





app.listen('8080')