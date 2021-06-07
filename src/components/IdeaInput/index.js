import { useState } from "react";

const IdeaInput = ({ bs }) => {
	//Add ideas
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
		<div>
			<input value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={addIdea}>Add</button>
		</div>
	);
};

export default IdeaInput;
