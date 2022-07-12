const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

mongoose.connect("mongodb+srv://borges:<password>@cluster0.hvasiwo.mongodb.net/?retryWrites=true&w=majority")
const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
    console.log(`💻 Backend started at http://localhost:${port} 💻`)
})