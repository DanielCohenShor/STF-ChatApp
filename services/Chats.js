const { Console } = require('console');
const User = require('../models/Users');

const returnAllChats = async (username) => {
    const user = await User.findOne({ username })
    const chats = user.chats
    console.log("the chats from service: ",chats)
}

module.exports = {returnAllChats}