const express = require(express);
const router = express.Router();
const Suggestion = require("../models/Suggestion")

//🚗get /api/suggest
router.get("/api/suggest", async (req,res) => {
    try {
        data = await Suggestion.find().sort(({createdat : -1}));
        res.json(data)}
    catch {
        res.status(500).json({message : "Failed Sending"})
    }
})