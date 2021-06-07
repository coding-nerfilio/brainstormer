import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateFormRoute from "./createForm";
import EditorRoute from "./editor";
import InvalidIdRoute from "./invalidId";
import InvalidRoute from "./invalidRoute";
import Header from "../components/Header";
const Routes = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				width: "100vw",
			}}
		>
			<Header />
			<Router>
				<Switch>
					<Route path="/editor/:id">
						<EditorRoute />
					</Route>
					<Route path="/invalid">
						<InvalidIdRoute />
					</Route>
					<Route path="/" exact>
						<CreateFormRoute />
					</Route>
					<Route path="*">
						<InvalidRoute />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default Routes;
