const express = require('express')
const app = express()
const morgan = require('morgan')
const blogPostsRouter = require('./blogPostsRouter.js')

app.use(morgan("combined"))
app.use(express.json())

app.use('/blog-posts', blogPostsRouter)





app.listen('8080')