const IdeaItemList = ({ bs, id, name }) => {
	return (
		<div>
			{name}
			<button onClick={() => bs.DeleteIdea(id)}>Delete</button>
		</div>
	);
};

export default IdeaItemList;
