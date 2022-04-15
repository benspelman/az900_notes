import React from "react";
// new ReactDOM import for 18
import ReactDOM from "react-dom";
import Fact from "../Fact";

describe("Fact component", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Fact />, div);
	});
});
