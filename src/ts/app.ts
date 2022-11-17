import * as PIXI from "pixi.js";
import state from "./state";

const app = new PIXI.Application({width: state.get().stage.width, height:state.get().stage.height, backgroundColor : 0x000000});

export default app;