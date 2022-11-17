import * as PIXI from "pixi.js";
import hero from "../hero";
import assets from "../assets";
import app from "../app";
import ticker from "../ticker";
import {Controls} from "./Controls";
import state from "../state";
import {World} from "./World";

export class Game {

    private app: PIXI.Application;
    private world: World;
    private controls: Controls;

    constructor(parent: HTMLElement) {

        this.app = app;
        this.world = new World();
        this.controls = new Controls();

        // @ts-ignore
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR
    }

    public init () {
        assets.onLoad().then(() => {
            this.world.init();
            hero.render({x: (this.app.screen.width / 2), y: (this.app.screen.height - 30) });
            ticker.start();
        });
    }
}
