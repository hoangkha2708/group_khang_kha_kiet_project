const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Import model
const NongSan = require("./models/NongSan");

// Kết nối Mongo
mongoose.connect("mongodb+srv://TXNGnongsan:congngheblockchain@cluster0.088foxp.mongodb.net/", {
    dbName: "truyxuat_nongsan"
}).then(() => {
    console.log("Kết nối MongoDB OK");
}).catch(err => {
    console.log("Lỗi MongoDB:", err);
});

// API thêm nông sản
app.post("/nongsan", async (req, res) => {
    const data = req.body;
    const ns = await NongSan.create(data);
    res.json(ns);
});

// API xem toàn bộ nông sản
app.get("/nongsan", async (req, res) => {
    const list = await NongSan.find();
    res.json(list);
});

app.listen(3000, () => console.log("Server chạy port 3000"));
