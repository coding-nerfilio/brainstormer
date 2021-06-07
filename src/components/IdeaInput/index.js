import { useState } from "react";
import "./style.css";

const IdeaInput = ({ bs }) => {
	const [input, setInput] = useState("");
	const addIdea = () => {
		if (input.length === 0) {
			alert("Must be filled");
			return;
		}
		bs.AddIdea(input).then(() => {
			setInput("");
		});
	};
	return (
		<div className="idea-input-container">
			<input
				className="idea-input-field"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className="idea-input-button" onClick={addIdea}>
				Add
			</button>
		</div>
	);
};

export default IdeaInput;
