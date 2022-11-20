const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = Schema(
    {
        chatName: {type: String, trim: true},
        users: [{
            type: mongoose.Schema.Types.ObjectId, //uget schema user id
            ref: "User"
        }],

        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Chat', chatSchema);