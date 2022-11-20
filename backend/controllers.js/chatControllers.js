const asyncHandler = require("express-async-handler")
const Chat = require("../models/Chat")
const User = require("../models/User")

const accessChat = asyncHandler(async (req, res) => {
    const {userId} = req.body

    const isChat = await Chat.find({
        $and: [
            {users: {$elemMatch: {$eq: req.user._id}}},
            {users: {$elemMatch: {$eq: userId}}}
        ]
    })
    .populate("users")
    .populate("latestMessage")

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: 'firstName'
    })

    if(isChat.length > 0) {
        res.send(isChat[0])
    } else {
        let chatData = {
            chatName: 'sender',
            users: [req.user._id, userId]
        }
    }

    try {
        const createdChat = await Chat.create(chatData)
        const FullChat = await Chat.findOne({_id: createdChat._id}).populate("users")

        res.status(200).send(FullChat)
    } catch(error) {
        res.status(400)
        throw new Error(error.message)
    }
})

const fetchChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ users: {$elemMatch: {$eq: req.user._id}}})
        .populate("users")
        .populate("latestMessage")
            .sort({updatedAt: -1})
        .then(async (results) => {
            results = await User.populate(results, {
                path: "latestMessage.user_from",
                select: "firstName"
            })
            res.status(200).send(results)
        })
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

module.exports = { accessChat, fetchChats}