require('dotenv').config()

const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 4000

app.set('port', port)

var server = http.createServer(app)
server.listen(port)

server.on('error', (e) => {
    console.log(e);
})

server.on('listening', () => {
    console.log(`Listening on ${port}`);
})

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to Database');
})
.catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    return res.status(201).send('Ola')
})