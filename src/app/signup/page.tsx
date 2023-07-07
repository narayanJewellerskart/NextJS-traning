"use client";

import React, { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
	const router = useRouter();

	const [userData, setUserData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const [buttonDisabled, setButtonDisabled] = useState(false);

	useEffect(() => {
		if (userData.email.length > 0 && userData.username.length > 0 && userData.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [userData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSignup = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(userData);

		try {
			await axios.post("/api/users/signup", userData);
			toast.success("Signup success.Please Login");
			router.push("/login");
		} catch (error: any) {
			console.log("Signup Failed", error.message);
			toast.error(error.message);
		}
	};

	return (
		<div className='pageWrapper'>
			<form onSubmit={onSignup} className='formWrapper'>
				<h1 className='text-center text-3xl tracking-widest font-bold'>Signup</h1>
				<br />
				<br />
				<div className='inputWrapper'>
					<label className='inputLabel' htmlFor='username'>
						Username
					</label>
					<input className='inputType ' type='text' name='username' id='username' value={userData.username} onChange={handleChange} />
				</div>
				<div className='inputWrapper'>
					<label className='inputLabel' htmlFor='email'>
						Email
					</label>
					<input className='inputType' type='email' name='email' id='email' value={userData.email} onChange={handleChange} />
				</div>
				<div className='inputWrapper'>
					<label className='inputLabel' htmlFor='password'>
						Password
					</label>
					<input className='inputType' type='password' name='password' id='password' value={userData.password} onChange={handleChange} />
				</div>
				<button type='submit' className='submitBtn'>
					{buttonDisabled ? "No signup" : "Submit"}
				</button>
				<br />
				<br />
				<p className='text-center font-semibold tracking-wider text-sm'>
					Already have account?{" "}
					<Link href='/login' className='underline'>
						Login Here
					</Link>
				</p>
			</form>
			<Toaster position='bottom-center' />
		</div>
	);
}
