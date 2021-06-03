import { useState } from "react";
import BrainStorm from "./logic/BrainStorm";

function App() {
	const test = async () => {
		let aBrainStorm = new BrainStorm();
		await aBrainStorm.Init("nerfilio", "school tests");
		await aBrainStorm.AddIdea("school shooting run away");
		let id = await aBrainStorm.AddIdea("old");
		aBrainStorm.DeleteIdea(id);
	};

	return (
		<div className="App">
			<button onClick={test}>Test</button>
		</div>
	);
}

export default App;
