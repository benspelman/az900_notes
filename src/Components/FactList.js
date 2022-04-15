import Fact from "./Fact";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const FactList = ({ notes, removeNote, toggleDarkMode, darkModeCheck }) => {
	return (
		<div className="FactList">
			<nav>
				<h1>Microsoft AZ900 notes 👨‍💻</h1>
				<FormGroup>
					<FormControlLabel
						control={<Switch onClick={() => toggleDarkMode()} defaultChecked />}
						label={darkModeCheck ? `🌙` : `☀️`}
					/>
				</FormGroup>
			</nav>
			<div>
				{notes.map((note) => {
					return (
						<Fact
							key={note.id}
							id={note.id}
							heading={note.heading}
							body={note.body}
							removeNote={removeNote}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default FactList;
