"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSignup = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className='flex items-center justify-center min-h-screen py-2'>
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
					Submit
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
		</div>
	);
}
