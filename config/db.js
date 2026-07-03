const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://didalswns:didalswns@cluster0.hdno9aa.mongodb.net/")
        console.log("🚀DB Connected")
    }
    catch {
        console.log("🙅Failed DB Connect")
    }
}

module.exports = dbConnect;