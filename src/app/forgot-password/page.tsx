"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ForgotPassword() {
	const [userData, setUserData] = useState({
		email: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className='flex items-center justify-center min-h-screen py-2'>
			<form onSubmit={handleSubmit} className='formWrapper'>
				<h1 className='text-center text-3xl tracking-widest font-bold'>Forgot Password</h1>
				<br />
				<br />
				<div className='inputWrapper'>
					<label className='inputLabel' htmlFor='email'>
						Enter Email
					</label>
					<input className='inputType' type='email' name='email' id='email' value={userData.email} onChange={handleChange} />
				</div>
				<button type='submit' className='submitBtn'>
					Submit
				</button>
			</form>
		</div>
	);
}
