const express = require('express')
const routes = express.Router()

// Buscando arquivos controllers
const VideoController = require("./controllers/videoController")


routes.get("/", (req, res) => res.send("Hello World!"))
routes.get("/videos", VideoController.index)

module.exports = routes
