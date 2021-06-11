import IdeaItemList from "./IdeaItemList";
import "./style.css";

const VisualizeBrainStorm = ({ bs, data }) => {
	return (
		<div className="visualize-container">
			<div className="idea-item-container">
				{data.Data.children !== undefined &&
					Object.values(data.Data.children).map((c) => (
						<IdeaItemList bs={bs} name={c.name} id={c.id} />
					))}
			</div>
			<div className="main-idea-container">{data.Data.name}</div>
		</div>
	);
};

export default VisualizeBrainStorm;
