import { connectDB } from "@/db-config/db";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { email, password } = reqBody;

		//Check if the user already exists
		const user = await User.findOne({ email });

		if (user && (await user.comparePassword(password))) {
			//
		} else {
			return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
