const express = require('express')
require('./db/mongoose.js')
const userRoute = require('./router/user')
const taskRoute = require('./router/task')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRoute)
app.use(taskRoute)


app.listen(port, () => {
    console.log('server is up on port ' + port)
})

