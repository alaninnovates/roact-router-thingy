import Roact from "@rbxts/roact";
import Hooks from "@rbxts/roact-hooks";
import { Router as RoactRouter, Route } from "@rbxts/roact-router";
import App from "./pages/App";

interface routerProps {}

const Router: Hooks.FC<routerProps> = (props, {}) => {
	return (
		<RoactRouter>
			<Route path="/" exact component={App} />
		</RoactRouter>
	);
};

export = new Hooks(Roact)(Router);
