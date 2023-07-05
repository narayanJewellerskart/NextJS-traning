"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className='pageWrapper'>
			<form onSubmit={handleSubmit} className='formWrapper'>
				<h1 className='text-center text-3xl tracking-widest font-bold'>Login</h1>
				<br />
				<br />
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
				<p className='text-right text-sm font-semibold tracking-wider underline text-blue-900'>
					<Link href='/forgot-password'>Forgot Password</Link>
				</p>
				<button type='submit' className='submitBtn'>
					Submit
				</button>
				<br />
				<br />
				<p className='text-center font-semibold tracking-wider text-sm'>
					Don't have account?{" "}
					<Link href='/signup' className='underline'>
						Signup Here
					</Link>
				</p>
			</form>
		</div>
	);
}
