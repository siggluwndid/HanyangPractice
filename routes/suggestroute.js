const express = require('express'); // 👈 따옴표 추가
const router = express.Router();
const Suggestion = require("../models/Suggestion");

// 🚗 GET /api/suggest 
router.get("/", async (req, res) => {
    try {
        // createdAt 대소문자 수정 및 data 변수 선언(const) 추가
        const data = await Suggestion.find().sort({ createdAt: -1 });
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: "Failed Sending" });
    }
});

// ✍️ POST /api/suggest
router.post("/", async (req, res) => {
    try {
        const newsuggest = new Suggestion({
            name: req.body.name,
            content: req.body.content
        });
        
        await newsuggest.save(); 
        res.status(201).json({ success: true });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Save Failed" });
    }
});

module.exports = router;