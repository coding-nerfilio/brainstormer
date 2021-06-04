import { useEffect } from "react";
import { useHistory, useParams } from "react-router";

import BrainStorm from "../../logic/BrainStorm";

const EditorRoute = () => {
	const { id } = useParams();
	const history = useHistory();

	//Check if brainstorm exists
	useEffect(() => {
		let bs = new BrainStorm(id);
		bs.itExists().then((e) => !e && history.push("/invalid"));
	}, []);

	return <div>EditorRoute</div>;
};
export default EditorRoute;
