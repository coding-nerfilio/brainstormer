import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import BrainStorm from "../../logic/BrainStorm";

const EditorRoute = () => {
	const { id } = useParams();
	const history = useHistory();

	const [bs, setBS] = useState(null);

	const [data, setData] = useState({
		Members: [],
		Data: { name: "", children: {} },
	});

	//Check if brainstorm exists, if exists fetch data
	useEffect(() => {
		let BS = new BrainStorm(id);
		setBS(BS);
		BS.itExists().then((e) => {
			if (!e) {
				history.push("/invalid");
			} else {
				BS.Fetch(setData);
			}
		});
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
			<div>
				<div>{data.Data.name}</div>
				<div>
					{data.Data.children != undefined &&
						Object.values(data.Data.children).map((c) => <div>{c.name}</div>)}
				</div>
			</div>
		</div>
	);
};
export default EditorRoute;
