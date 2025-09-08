// app.js 或某个路由文件
const express = require('express');
const pool = require('./db'); // 导入之前创建的连接池

const app = express();

// 一个简单的 GET 路由，用来从数据库获取用户列表
app.get('/users', async (req, res) => {
  try {
    // 使用连接池执行查询
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    
    // 返回查询结果
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Server Error');
  }
});

// 你还可以使用参数化查询来防止 SQL 注入
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [userId]);
    
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
