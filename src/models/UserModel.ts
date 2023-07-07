import mongoose, { Model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "@/type-checking/Interface";

const userSchema = new mongoose.Schema<IUser>(
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

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
	return bcrypt.compare(password, this.password);
};

const User: Model<IUser> = mongoose.models.users || mongoose.model<IUser>("users", userSchema);

export default User;
