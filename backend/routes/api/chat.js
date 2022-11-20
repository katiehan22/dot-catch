const express = require("express")
const router = express.Router()

const { requireUser } = require('../../config/passport');
const { accessChat, fetchChats } = require("../../controllers.js/chatControllers");

router.route("/").post(requireUser, accessChat)
router.route("/").get(requireUser, fetchChats)