const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(express.static('./public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello")

})
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {

        await connectdb.connectDB(process.env.MONGO_URI)
        console.log('Database connection successfull')
        app.listen(port, () => {

            console.log(`server is listening on port ${port}`)

        })


    }
    catch (error) {

        console.log(error)
    }
}

start()


