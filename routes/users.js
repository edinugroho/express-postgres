var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.get('/:user_id', UserController.showUser);
router.patch('/:user_id', UserController.updateUser);
router.delete('/:user_id', UserController.destroy);

module.exports = router;
