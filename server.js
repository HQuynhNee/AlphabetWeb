const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Hỗ trợ đọc dữ liệu JSON từ request

// **Chỉ định thư mục chứa file tĩnh**
app.use(express.static(path.join(__dirname, "LearnAlphabet")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "LearnAlphabet", "index.html"));
});

// **Kết nối SQLite**
const db = new sqlite3.Database("./LearningAlphaEgg.db", (err) => {
    if (err) {
        console.error("❌ Lỗi kết nối SQLite:", err.message);
    } else {
        console.log("✅ Kết nối thành công với SQLite.");
    }
});

// **API xác thực người dùng**
app.post("/login", (req, res) => {
    const { username, password } = req.body; // Sử dụng `username`, `password` thay vì `Username`, `Password`
    console.log(`🔑 Nhận yêu cầu đăng nhập: ${username}`);

    const query = "SELECT * FROM Account WHERE Username = ? AND Password = ?";
    db.get(query, [username, password], (err, user) => {
        if (err) {
            console.error("❌ Lỗi truy vấn SQL:", err);
            return res.status(500).json({ error: "Lỗi server" });
        }
        if (!user) {
            console.warn("⚠️ Sai tài khoản hoặc mật khẩu.");
            return res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
        }

        console.log("✅ Đăng nhập thành công:", user);
        res.json({ success: true, userID: user.ID });
    });
});
// API đăng ký người dùng
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    console.log(`📝 Nhận yêu cầu đăng ký: ${username}`);

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username và password không được để trống." });
    }

    const checkUserQuery = "SELECT * FROM Account WHERE Username = ?";
    db.get(checkUserQuery, [username], (err, user) => {
        if (err) {
            console.error("❌ Lỗi truy vấn SQL:", err);
            return res.status(500).json({ success: false, message: "Lỗi server" });
        }

        if (user) {
            console.warn("⚠️ Tài khoản đã tồn tại.");
            return res.status(400).json({ success: false, message: "Tài khoản đã tồn tại" });
        }

        const insertUserQuery = "INSERT INTO Account (Username, Password) VALUES (?, ?)";
        db.run(insertUserQuery, [username, password], function (err) {
            if (err) {
                console.error("❌ Lỗi khi thêm người dùng:", err);
                return res.status(500).json({ success: false, message: "Không thể đăng ký người dùng" });
            }

            console.log("✅ Đăng ký thành công:", username);
            res.status(201).json({ success: true, message: "Đăng ký thành công" });
        });
    });
});

// **API lấy dữ liệu chữ cái theo ID**
app.get("/letter/:id", (req, res) => {
    const id = req.params.id;
    console.log(`🔍 Nhận request /letter/${id}`);

    db.get("SELECT Alphabet FROM EggAlpha WHERE ID = ?", [id], (err, row) => {
        if (err) {
            console.error("❌ Lỗi truy vấn:", err);
            return res.status(500).json({ error: "Lỗi truy vấn SQL" });
        }
        if (!row) {
            console.warn("⚠️ Không tìm thấy chữ cái cho ID:", id);
            return res.status(404).json({ error: "Không tìm thấy dữ liệu" });
        }
        
        console.log("🔠 Dữ liệu chữ nhận được:", row);
        res.json({ alphabet: row.Alphabet });
    });
});

// **API lấy nội dung theo ID**
app.get("/content/:id", (req, res) => {
    const eggId = req.params.id;
    console.log(`📩 Nhận request /content/${eggId}`);

    db.get("SELECT ID, Alphabet, NoiDung1 FROM EggAlpha WHERE ID = ?", [eggId], (err, row) => {
        if (err) {
            console.error("⚠️ Lỗi truy vấn SQL:", err);
            return res.status(500).json({ error: "Lỗi server" });
        }
        if (!row) {
            console.warn("⚠️ Không tìm thấy dữ liệu với ID:", eggId);
            return res.status(404).json({ error: "Không tìm thấy dữ liệu" });
        }

        console.log("✅ Kết quả truy vấn:", row);
        res.json(row);
    });
});

// **Chạy server**
app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${port}`);
});
