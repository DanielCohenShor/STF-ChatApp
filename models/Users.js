const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const user = new Schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        displayName: {
            type: String,
            required: true
        },
        profilePic: {
            type: String,
            required: true
        },
        chats: {
            
        }
    }
);
module.exports = mongoose.model('Users', user);