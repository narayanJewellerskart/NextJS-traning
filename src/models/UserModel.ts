import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser, IUserModel } from "@/type-checking/Interface";

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please provide a username."],
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
	},
	{ timestamps: true }
);

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.models.user || mongoose.model("User", UserSchema);

export default User;
