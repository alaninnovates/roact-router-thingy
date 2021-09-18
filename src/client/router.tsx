import Roact from "@rbxts/roact";
import Hooks from "@rbxts/roact-hooks";
import { Router as RoactRouter, Route } from "@rbxts/roact-router";
import App from "./pages/App";

interface routerProps {}

const Router: Hooks.FC<routerProps> = (props, {}) => {
	return (
		<>
			<textlabel Size={new UDim2(0, 400, 0, 300)} Text={"Hello, Roact!"} />
			<RoactRouter>
				<Route
					path="/"
					exact
					render={() => {
						print("rendering app");
						// return <App />;
						return <textlabel Size={new UDim2(0, 400, 0, 300)} Text={"Hello, Roact-Router!"} />;
						// return class extends Roact.Component {
						// 	render() {
						// 		return <textlabel Size={new UDim2(0, 400, 0, 300)} Text={"Hello, Roact!"} />;
						// 	}
						// };
					}}
				/>
			</RoactRouter>
		</>
	);
};

export = new Hooks(Roact)(Router);
