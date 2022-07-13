const {response} = require("express")
const {v4: uuid} = require("uuid")

const Video  = require("../models/video")

module.exports = {
    async index(req, res) {
        try {
            const videos = await Video.find()
            return res.status(200).json({videos})
        } catch(err) {
            res.status(500).json({error: err.message})
        }
    },

    async store(req, res) {
        const {title, link} = req.body

        if (!title || !link) {
            return res.status(400).json({error: "Missing required field: title, link"})
        }

        const video = new Video({
            _id: uuid(),
            title,
            link,
            liked: false,
        })

        try {
            await video.save()

            return res.status(201).json({message: "Video saved and add successfully"})
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}