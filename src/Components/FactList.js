import Fact from "./Fact";

const FactList = ({ notes, removeNote }) => {
	return (
		<div className="FactList">
			<h1>Microsoft AZ900 notes 👨‍💻</h1>
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
