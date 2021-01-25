const express = require('express');
const app = express();
const cors = require('cors');
const { conn } = require('./connection');

const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/todo', todoRoutes);

conn.connect((err) => {
  if (err) throw err;
  console.log('Koneksi Berhasil');
});

app.listen(6000, () => {
  console.log('Server berjalan menggunakan port 6000');
});
