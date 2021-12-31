const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello")

})
app.use('/api/v1/tasks', tasks)

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


