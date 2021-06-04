import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import IdeaInput from "../../components/IdeaInput";
import IdeaItemList from "../../components/IdeaItemList";
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

	return (
		<div>
			<IdeaInput bs={bs} />
			<div>
				<div>{data.Data.name}</div>
				<div>
					{data.Data.children != undefined &&
						Object.values(data.Data.children).map((c) => (
							<IdeaItemList bs={bs} name={c.name} id={c.id} />
						))}
				</div>
			</div>
		</div>
	);
};
export default EditorRoute;
