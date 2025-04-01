const sqlite3 = require('sqlite3').verbose();

// Kết nối đến database
const db = new sqlite3.Database('./LearningAlphaEgg.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Lỗi khi mở cơ sở dữ liệu:', err.message);
    } else {
        console.log('Kết nối đến cơ sở dữ liệu thành công!');
    }
});

// Truy vấn dữ liệu từ bảng EggAlpha
const getAlphabetData = (callback) => {
    const query = 'SELECT * FROM EggAlpha';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Lỗi truy vấn dữ liệu:', err.message);
            return;
        }
        callback(rows);
    });
};

// Xuất dữ liệu ra file script.js
module.exports = { getAlphabetData };
