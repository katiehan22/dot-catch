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
    required: true
  },
  body: {
    type: String,
    required: true
  }  
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);