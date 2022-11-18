import {Stage} from "./Stage";
import {World} from "../World";
import {Controls} from "../Controls";
import assets from "../../assets";
import {Hero} from "../Hero";
import ticker from "../../ticker";
import app$ from "../../app";

export class GameStage extends Stage {

    world: World;
    hero: Hero;
    controls: Controls;

    constructor() {
        super();

        this.world = new World();
        this.hero = new Hero();
        this.controls = new Controls();
    }

    public build () {
        console.log("Build Game");

        this.renderHero();
    }

    private renderHero () {
        assets.onLoad().then(() => {
            this.world.init();
            this.hero.render({x: (app$.screen.width / 2), y: (app$.screen.height - 30) });
            ticker.start();

        });
    }

    public close () {
        console.log("Close Game");
    }
}