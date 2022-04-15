const NewNoteForm = ({ addNote }) => {
	return (
		<div className="NewNoteFormContainer">
			<form className="NewNoteForm">
				<h2>Add new note</h2>
				<input id="headingText" type="text" placeholder="Heading" />
				<input id="bodyText" type="text" placeholder="Body" />
				<button
					onClick={(e) => {
						let headingText = document.getElementById("headingText");
						let bodyText = document.getElementById("bodyText");
						addNote(e, headingText, bodyText);
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewNoteForm;
