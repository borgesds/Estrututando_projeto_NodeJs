/* 
Projeto de estudo de uma videoteca,
estruturando api no NodeJS.
*/

require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const routes = require("./routes")
const connectToDatabase = require("./database")

connectToDatabase()


// Connect to the server
const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
    console.log(`💻 Backend started at http://localhost:${port} 💻`)
})