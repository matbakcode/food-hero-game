import * as PIXI from "pixi.js";
import hero from "../hero";
import {Hero} from "./Hero";
import assets from "../assets";
import app from "../app";

export class Game {

    private app: PIXI.Application;
    private hero: Hero;

    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = app;
        this.hero = hero;

        // @ts-ignore
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR
    }

    public init () {
        assets.onLoad().then(() => {
            this.hero.render();
        })
    }
}
