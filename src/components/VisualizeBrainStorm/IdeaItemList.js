import "./style.css";
import DeleteIcon from "../../assets/trash-bin-outline.svg";

const IdeaItemList = ({ bs, id, name }) => {
	return (
		<div className="idea-item-list">
			<button
				style={{ height: "32px", width: "32px", marginRight: "10px" }}
				onClick={() => bs.DeleteIdea(id)}
			>
				<img
					src={DeleteIcon}
					alt="Delete"
					style={{ height: "16px", width: "16px" }}
				/>
			</button>
			<div>{name}</div>
		</div>
	);
};

export default IdeaItemList;
