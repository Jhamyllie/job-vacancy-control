const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	phone:{
		type: Number
	}
},
	{versionKey: false}
);

const user = mongoose.model("user", UserSchema);
module.exports = user;