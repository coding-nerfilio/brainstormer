import BrainStorm from "../../logic/BrainStorm";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useEditor = (id) => {
	const history = useHistory();

	const [bs, setBS] = useState(null);

	const [data, setData] = useState({
		Members: [],
		Data: { name: "", children: {} },
	});

	//Check if brainstorm exists, if exists fetch data
	useEffect(() => {
		let BS = new BrainStorm(id);
		setBS(BS);
		BS.itExists().then((e) => {
			if (!e) {
				history.push("/invalid");
			} else {
				BS.Fetch(setData);
			}
		});
	}, []);

	return {
		bs,
		data,
	};
};

export default useEditor;
