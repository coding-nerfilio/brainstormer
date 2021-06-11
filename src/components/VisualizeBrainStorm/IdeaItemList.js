import "./style.css";
const IdeaItemList = ({ bs, id, name }) => {
	return (
		<div className="idea-item-list">
			<button
				style={{ height: "16px", width: "16px", marginRight: "10px" }}
				onClick={() => bs.DeleteIdea(id)}
			></button>
			{name}
		</div>
	);
};

export default IdeaItemList;
