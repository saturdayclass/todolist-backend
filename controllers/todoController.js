const { conn } = require('../connection');

exports.showTodo = async (req, res) => {
  const { id_user } = req.body;
  await conn.query(
    `SELECT * FROM tb_todo WHERE id_user = '${id_user}'`,
    (err, result) => {
      if (!err) {
        res.status(200).json({
          status: 'Berhasil',
          data: result,
        });
      }
    }
  );
};

exports.addTodo = async (req, res) => {
  const { todo, id_user } = req.body;
  let data = {
    todo,
    id_user,
  };
  await conn.query(`INSERT INTO tb_todo SET ?`, data, (err, result) => {
    if (!err) {
      res.status(200).json({
        status: 'Todo Berhasil di tambahkan!',
      });
    }
  });
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.idTodo;
  await conn.query(
    `DELETE FROM tb_todo WHERE id_todo='${id}'`,
    (err, result) => {
      if (!err) {
        res.status(200).json({
          status: 'Todo Berhasil di hapus!',
        });
      }
    }
  );
};
