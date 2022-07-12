const mongoose = require("mongoose")

// Connect to Mongodb
function connectToDatabase() {
    mongoose.connect("mongodb+srv://borges:*******@cluster0.hvasiwo.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )

    const db = mongoose.connection
    db.on("error", (error) => console.error(error))
    db.once("open", () => console.log("📂📦 Connected to the database 📦📂"))
}

module.exports = connectToDatabase
