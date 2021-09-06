import Roact, { mount } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import Router from "./router";

const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

mount(<Router />, PlayerGui);
