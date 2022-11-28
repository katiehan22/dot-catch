const express = require('express')
const router = express.Router()
const { requireUser } = require('../../config/passport');

// router.route('/').post(requireUser, sendMessage)

module.exports = router