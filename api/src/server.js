/* 
Projeto de estudo de uma videoteca,
estruturando api no NodeJS.
*/

const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

// Connect to Mongodb
mongoose.connect("mongodb+srv://borges:<password>@cluster0.hvasiwo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("📂📦 Connected to the database 📦📂"))


// Connect to the server
const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
    console.log(`💻 Backend started at http://localhost:${port} 💻`)
})