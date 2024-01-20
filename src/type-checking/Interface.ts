import { Document, Model } from "mongoose";

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	isVerified?: boolean;
	isAdmin?: boolean;
	forgotPasswordToken?: string;
	forgotPasswordTokenExpiry?: Date;
	verifyToken?: string;
	verifyTokenExpiry?: Date;
	createdAt: Date;
	updatedAt: Date;
	comparePassword: (password: string) => Promise<boolean>;
}

// export interface IUserModel extends Model<IUser> {
// 	users: IUser[];
// }
