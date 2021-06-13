import { useState } from "react";
import AddIcon from "../../assets/add-circle-outline.svg";
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
			<button className="idea-input-button-container" onClick={addIdea}>
				<img src={AddIcon} alt="Add" className="idea-input-button" />
			</button>
		</div>
	);
};

export default IdeaInput;
