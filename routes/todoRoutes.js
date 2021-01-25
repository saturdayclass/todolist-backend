const express = require('express');
const router = express.Router();

const {
  showTodo,
  addTodo,
  deleteTodo,
} = require('../controllers/todoController');

router.post('/', showTodo);
router.post('/tambah', addTodo);
router.delete('/:idTodo', deleteTodo);

module.exports = router;
