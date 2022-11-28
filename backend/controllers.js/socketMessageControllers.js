const asyncHandler = require("express-async-handler")
const Message = require('../models/Message')

const sendSocketMessage = asyncHandler(async (req, res) => {
    const {body, chatId} = req.body

    if(!body || !chatId){
        return res.status(400)
    }

    let newMessage = {
        user_from: req.user._id,
        body: body,
        chat: chatId
    }

    try {
        let message = await Message.create(newMessage)
    } catch (error) {
        
    }
})

module.exports = {sendSocketMessage}