const express = require("express")
const router = express.Router()

const { requireUser } = require('../../config/passport');
const { accessChat } = require("../../controllers.js/chat");

router.route("/").post(requireUser, accessChat)