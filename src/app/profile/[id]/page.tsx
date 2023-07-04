"use client";

import React from "react";

export default function ProfilePageID({ params }: any) {
	return (
		<div>
			<h1>ProfilePageID</h1>
			<p>Here is your ID: {params.id}</p>
		</div>
	);
}
