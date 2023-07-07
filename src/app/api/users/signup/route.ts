import { connectDB } from "@/db-config/db";
import hashPassword from "@/helpers/passwordHashing";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { username, email, password } = reqBody;

		// check if the user already exists
		const user = await User.findOne({ email });

		if (user) {
			return NextResponse.json({ error: "User already exists" }, { status: 400 });
		}

		let passwordHashing = await hashPassword(password);

		const newUser = new User({
			username,
			email,
			password: passwordHashing,
		});

		const savedUser = await newUser.save();

		return NextResponse.json({
			message: "User created successfully",
			success: true,
			savedUser,
		});
	} catch (err: any) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
