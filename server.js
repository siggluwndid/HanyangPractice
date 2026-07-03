const express = require("express");
const path = require("path")
const connectDb = require("./config/db")
const suggestrouter = require("./routes/suggestroute")

const app = express.app();

//db연결
connectDb();

//미들웨어
app.use(express.json());

// ⭐ 꿀팁: public 폴더 안의 index.html을 자동으로 메인(/) 페이지로 띄워주는 Express 기능
app.use(express.static(path.join(__dirname, 'public')));

//라우터
app.use("/api/suggest", suggestrouter)

//서버가동
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 서버가동 완료!  포트: ${PORT}`);
});