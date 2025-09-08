// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',      // 数据库主机名
  user: 'root',           // 数据库用户名
  password: 'your_password', // 你的数据库密码
  database: 'your_database', // 你的数据库名称
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
