const { conn } = require('../connection');

exports.signIn = async (req, res) => {
  const { username, password } = req.body;
  await conn.query(
    `SELECT * FROM tb_user WHERE username='${username}' AND password='${password}'`,
    (err, result) => {
      res.status(200).json({ status: 'Sukses', data: result });
    }
  );
};

exports.signUp = async (req, res) => {
  const { name, username, password } = req.body;
  let data = {
    nama_user: name,
    username: username,
    password: password,
  };
  const query = await conn.query(`INSERT INTO tb_user SET ?`, data);
  if (query) {
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil Mendaftar!',
    });
  }
};
