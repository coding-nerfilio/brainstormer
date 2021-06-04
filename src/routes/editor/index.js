import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import BrainStorm from "../../logic/BrainStorm";

const EditorRoute = () => {
	const { id } = useParams();
	const history = useHistory();

	const [bs, setBS] = useState(null);

	//Check if brainstorm exists
	useEffect(() => {
		let BS = new BrainStorm(id);
		setBS(BS);
		BS.itExists().then((e) => !e && history.push("/invalid"));
	}, []);

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
			<div>
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<button onClick={addIdea}>Add</button>
			</div>
		</div>
	);
};
export default EditorRoute;
