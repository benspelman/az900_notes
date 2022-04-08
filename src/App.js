import React, { useState, useEffect } from "react";
import FactList from "./Components/FactList";
import { notesList } from "./notes";
import "./App.css";
import NewNoteForm from "./Components/NewNoteForm";

function App() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(notesList);
	}, []);

	const removeNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const addNote = (e, headingText, bodyText) => {
		e.preventDefault();

		const newNotes = [
			...notes,
			{ id: 500, heading: `${headingText.value}`, body: `${bodyText.value}` },
		];

		setNotes(newNotes);
		headingText.value = "";
		bodyText.value = "";
	};

	if (notes.length === 0) {
		return (
			<div>
				<h2>There are no notes left</h2>
				<button id="deleteButton" onClick={() => setNotes(notesList)}>
					Refresh notes
				</button>
			</div>
		);
	}

	return (
		<div className="App">
			<FactList notes={notes} removeNote={removeNote} />
			<NewNoteForm addNote={addNote} />
		</div>
	);
}

export default App;
