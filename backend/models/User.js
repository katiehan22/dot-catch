const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    gender: {
        type: String
    },
    sexualOrientation: {
        type: String
    },
    prompt1: {
        type: Map,
        of: String
    },
    prompt2: {
        type: Map,
        of: String
    },
    prompt3: {
        type: Map,
        of: String
    },
    prompt4: {
        type: Map,
        of: String
    },
    likes: {
        type: Map,
        of: Boolean
    },
    matches: {
        type: Map,
        of: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);