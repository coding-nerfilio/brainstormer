import React from "react";
import ReactDOM from "react-dom";

import { initFirebase } from "./initFirebase";
import Routes from "./routes";

import store from "./redux/store";
import { Provider } from "react-redux";

initFirebase();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Routes />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
