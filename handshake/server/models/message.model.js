const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
	text: String,
	
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;