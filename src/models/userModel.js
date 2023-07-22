const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	_id: { 
		type: mongoose.Schema.Types.ObjectId, 
		default: () => new mongoose.Types.ObjectId()
	},
	name: {
		type: String,
		isRequired: true
	},
	email: {
		type: String,
		isRequired: true,
		unique: true,
	},
	password: {
		type: String,
		isRequired: true,
	},
	phone:{
		type: Number
	}
},
	{versionKey: false}
);

const user = mongoose.model("user", UserSchema);
module.exports = user;