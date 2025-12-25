// Kết nối MongoDB (bản tiếng Việt dễ hiểu)

const mongoose = require("mongoose");

// ---- LINK MONGODB CỦA NHÓM ----
const MONGO_URL = "mongodb+srv://TXNGnongsan:congngheblockchain@cluster0.088foxp.mongodb.net/";

// ---- Hàm kết nối MongoDB ----
async function ketNoiMongo() {
    try {
        await mongoose.connect(MONGO_URL, {
            dbName: "truyxuat_nongsan"  // tên database của nhóm
        });

        console.log("✅ Đã kết nối MongoDB thành công!");
    } catch (err) {
        console.log("❌ Lỗi kết nối MongoDB: ", err);
    }
}

ketNoiMongo();
