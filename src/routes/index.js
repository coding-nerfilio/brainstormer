import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateFormRoute from "./createForm";
import EditorRoute from "./editor";
import InvalidIdRoute from "./invalidId";
import InvalidRoute from "./invalidRoute";
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/editor/:id">
					<EditorRoute />
				</Route>
				<Route path="/invalid">
					<InvalidIdRoute />
				</Route>
				<Route path="/">
					<CreateFormRoute />
				</Route>
				<Route path="*">
					<InvalidRoute />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
