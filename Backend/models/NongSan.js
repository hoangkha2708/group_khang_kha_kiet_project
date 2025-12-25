const mongoose = require("mongoose");

// Tạo Schema cho nông sản
const NongSanSchema = new mongoose.Schema({
    ten: String,
    loai: String,
    ngay_thu_hoach: Date,
    noi_san_xuat: String,
    trang_thai: String
});

// Tạo Model
module.exports = mongoose.model("NongSan", NongSanSchema);
