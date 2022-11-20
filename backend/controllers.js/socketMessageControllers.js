const asyncHandler = require("express-async-handler")

const sendSocketMessage = asyncHandler(async (req, res) => {
    const {body, chatId} = req.body
})

module.exports = {sendSocketMessage}