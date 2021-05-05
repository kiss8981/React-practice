const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 8081

mongoose.connect('mongodb://192.168.0.13:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(()=> console.log('DB Connect'))
.catch(err => console.log(err))

app.get('/api', (req, res) => res.send("Hello, World"))


app.listen(port, () => console.log(`Backend server listen at http://localhost:${port}`))