import React from "react";
import ReactDOM from "react-dom";

import { initFirebase } from "./initFirebase";
import Routes from "./routes";

initFirebase();

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById("root")
);
