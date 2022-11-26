const express = require('express')
const router = express.Router();
const authen = require('../api/controllers/authen')

router.post('/register', authen.register)
router.post('/signin', authen.signIn)

module.exports = router;
