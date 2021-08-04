const mongoose = require("mongoose");
require("./message.model");
const UserSchema = new mongoose.Schema({
	name: String,

	messages:[{type:mongoose.Schema.Types.ObjectId, ref:'Message'}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;