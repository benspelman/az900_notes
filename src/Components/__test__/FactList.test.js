import { render, screen } from "@testing-library/react";
import FactList from "../FactList";
import { notesList } from "../../notes";

describe("FactList", () => {
	it("renders without crashing", () => {
		render(<FactList notes={notesList} />);
		// screen.debug();
	});

	it("contains a H1 element", () => {
		let view = render(<FactList notes={notesList} />);
		view.getByText("Microsoft AZ900 notes 👨‍💻");
	});

	it("correctly reads the props list", () => {
		expect(notesList).not.toBeNull();
	});
});
