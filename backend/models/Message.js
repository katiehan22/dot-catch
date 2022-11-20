const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
  user_from: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user_to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true //commented out for socket.io
  },
  body: {
    type: String,
    trim: true,
    required: true
  }, 
  chat: { //which chat group it is
    type: Schema.Types.ObjectId,
    ref: "Chat"
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);