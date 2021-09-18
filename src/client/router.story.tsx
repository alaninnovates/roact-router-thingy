import Roact from "@rbxts/roact";
import Router from "./router";

export = (target: Frame): (() => void) => {
	print("mounting router");
	const mount = Roact.mount(<Router />, target);

	return () => {
		Roact.unmount(mount);
	};
};
