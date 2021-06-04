import { useState } from "react";
import { useHistory } from "react-router";
import BrainStorm from "../../logic/BrainStorm";
const CreateFormRoute = () => {
	const [name, setName] = useState("");
	const [user, setUser] = useState("");

	const history = useHistory();

	const CreateBrainStorm = async () => {
		if (name.length == 0 || user.length == 0) {
			alert("Fill all fields");
			return;
		}
		let bs = new BrainStorm();
		bs.Init(user, name).then((id) => {
			history.push("/editor/" + id);
		});
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<input
				value={user}
				onChange={(e) => setUser(e.target.value)}
				placeholder="User"
			/>
			<button onClick={CreateBrainStorm}>Create</button>
		</div>
	);
};
export default CreateFormRoute;
