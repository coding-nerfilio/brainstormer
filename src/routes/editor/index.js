import { useParams } from "react-router";
import IdeaInput from "../../components/IdeaInput";
import VisualizeBrainStorm from "../../components/VisualizeBrainStorm";

import useEditor from "./useEditor";

const EditorRoute = () => {
	const { bs, data } = useEditor(useParams().id);

	return (
		<div
			style={{
				flex: 1,
				alignSelf: "stretch",
				display: "flex",
				flexDirection: "column",
				paddingLeft: "10px",
				paddingRight: "10px",
			}}
		>
			<IdeaInput bs={bs} />
			<VisualizeBrainStorm bs={bs} data={data} />
		</div>
	);
};
export default EditorRoute;
