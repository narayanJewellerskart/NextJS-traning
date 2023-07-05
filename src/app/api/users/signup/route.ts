import { connectDB } from "@/db-config/db";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest, res: NextResponse) {}
