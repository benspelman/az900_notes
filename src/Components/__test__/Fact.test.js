import { render, screen } from "@testing-library/react";
import Fact from "../Fact";

describe("Fact component", () => {
	it("renders without crashing", () => {
		render(<Fact />);
	});

	it("contains a delete button", () => {
		render(<Fact />);
		expect(screen.getByText("Delete")).toBeInTheDocument();
	});
});
