import { useParams } from "react-router";
import IdeaInput from "../../components/IdeaInput";
import IdeaItemList from "../../components/IdeaItemList";

import useEditor from "./useEditor";

const EditorRoute = () => {
	const { bs, data } = useEditor(useParams().id);

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
