var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.index);
router.post('/', UserController.create);
router.get('/:user_id', UserController.show);
router.patch('/:user_id', UserController.update);
router.delete('/:user_id', UserController.destroy);

module.exports = router;
