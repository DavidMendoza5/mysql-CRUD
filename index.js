const express = require('express')
const server = express()
const bodyParser = require('body-parser')
require('dotenv').config()

const con = require('./repository/connection/connection')
const students_routes = require('./routes/students')

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use('/v1/students', students_routes)

con.connection().then(msg => {
    server.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`)
    })
}).catch(err => {
    console.log("There is a problem with the db", err)
})

module.exports = server
