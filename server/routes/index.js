const express = require('express');
const router = express.Router();
const { editUser } = require('../controllers/editUserController');
const { exportUsers } = require('../controllers/exportUserController');
const { getUser } = require('../controllers/getUserController');
const { fetchAndSaveUsers } = require('../controllers/userController')

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

router.get('/users/fetch', fetchAndSaveUsers)
router.get('/users/get', getUser)
router.post('/users/:id', editUser)
router.get('/users/export', exportUsers)

module.exports = router;