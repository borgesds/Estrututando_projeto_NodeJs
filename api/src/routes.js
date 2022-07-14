const express = require('express')
const routes = express.Router()

// Buscando arquivos controllers
const VideoController = require("./controllers/videoController")

routes.get("/videos", VideoController.index)
routes.post("/videos", VideoController.store)


module.exports = routes
