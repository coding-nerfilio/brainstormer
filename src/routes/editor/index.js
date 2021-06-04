import { useParams } from "react-router";
import IdeaInput from "../../components/IdeaInput";
import VisualizeBrainStorm from "../../components/VisualizeBrainStorm";

import useEditor from "./useEditor";

const EditorRoute = () => {
	const { bs, data } = useEditor(useParams().id);

	return (
		<div>
			<IdeaInput bs={bs} />
			<VisualizeBrainStorm bs={bs} data={data} />
		</div>
	);
};
export default EditorRoute;
