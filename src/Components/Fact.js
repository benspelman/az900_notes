import React, { useState } from "react";

const Fact = ({ id, heading, body, removeNote }) => {
	return (
		<div className="Fact">
			<h2>{heading}</h2>
			<p>{body}</p>
			<button id="deleteButton" onClick={() => removeNote(id)}>
				Delete
			</button>
		</div>
	);
};

export default Fact;
