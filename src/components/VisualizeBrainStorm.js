import IdeaItemList from "./IdeaItemList";

const VisualizeBrainStorm = ({ bs, data }) => {
	return (
		<div>
			<div>{data.Data.name}</div>
			<div>
				{data.Data.children !== undefined &&
					Object.values(data.Data.children).map((c) => (
						<IdeaItemList bs={bs} name={c.name} id={c.id} />
					))}
			</div>
		</div>
	);
};

export default VisualizeBrainStorm;
