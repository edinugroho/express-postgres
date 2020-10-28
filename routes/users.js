var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);

module.exports = router;
