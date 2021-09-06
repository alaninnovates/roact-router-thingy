import Roact from "@rbxts/roact";
import Hooks from "@rbxts/roact-hooks";

interface AppProps {}

const App: Hooks.FC<AppProps> = (props, {}) => {
	return <textlabel Text="hi everyone" />;
};

export = new Hooks(Roact)(App);
