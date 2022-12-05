const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Message = mongoose.model('Message');
const { requireUser } = require('../../config/passport');
const validateMessageInput = require('../../validations/messages');

router.get('/user/:currentUserId/match/:matchedUserId', async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.currentUserId);
  } catch(err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
  try {
    const messages = await Message.find({$or: [
      { $and: [ {user_from: req.params.currentUserId}, {user_to: req.params.matchedUserId} ] },
      { $and: [ {user_from: req.params.matchedUserId}, {user_to: req.params.currentUserId} ] }
    ]})
                              .sort({ createdAt: 1 })
                              // .populate("author", "_id, username");
    const messagesObj = {};
    messages.map(message => messagesObj[message._id] = message )
    return res.json(messagesObj);
  }
  catch(err) {
    return res.json([]);
  }
})

router.post('/', requireUser, validateMessageInput, async (req, res, next) => {
  try {
    const newMessage = new Message({
      user_from: req.body.user_from,
      user_to: req.body.user_to,
      body: req.body.body
    });

    let message = await newMessage.save();
    // message = await message.populate('author', '_id, username');
    return res.json(message);
  }
  catch(err) {
    next(err);
  }
});

router.patch('/:messageId', requireUser, validateMessageInput, async (req, res, next) => {
  try {
    // const message = await Message.findById(
    //   req.params.messageId
    //   );
    const message = await Message.findById(
      req.params.messageId
    );

    message.body = req.body.body || message.body
    // Message.updateOne(
    //   { _id: req.params.messageId },
    //   { $set: { body: req.body.body } }
    // )
    await message.save();
    // message = await message.populate('author', '_id, username');
    return res.json(message);
  }
  catch(err) {
    // console.log('error is ',err)
    next(err);
  }
});

router.delete('/:messageId', requireUser, async (req, res, next) => {
  try {
    const message = await Message.findById(
      req.params.messageId
    );
    await message.delete()
    
    return res.json("Successfully deleted.");
  }
  catch(err) {
    next(err);
  }
});

module.exports = router;