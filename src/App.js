import React, { useState, useEffect } from "react";
import FactList from "./Components/FactList";
import { notesList } from "./notes";
import "./App.css";
import NewNoteForm from "./Components/NewNoteForm";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(notesList);
	}, []);

	const toggleDarkMode = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);
	};

	const removeNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const addNote = (e, headingText, bodyText) => {
		e.preventDefault();

		if ((headingText.value === "") | (bodyText.value === "")) {
			alert("Please fill both text fields before submitting");
		} else {
			const newNotes = [
				...notes,
				{ id: 500, heading: `${headingText.value}`, body: `${bodyText.value}` },
			];

			setNotes(newNotes);
			headingText.value = "";
			bodyText.value = "";
		}
	};

	if (notes.length === 0) {
		return (
			<div className="NewNoteFormContainer">
				<h2>There are no notes left</h2>
				<button id="deleteButton" onClick={() => setNotes(notesList)}>
					Refresh notes
				</button>
			</div>
		);
	}

	return (
		<div className={darkMode ? `App--dark` : `App`}>
			<FactList
				notes={notes}
				removeNote={removeNote}
				toggleDarkMode={toggleDarkMode}
				darkModeCheck={darkMode}
			/>
			<NewNoteForm addNote={addNote} />
		</div>
	);
}

export default App;
