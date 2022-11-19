import {Stage} from "./Stage";
import {World} from "../World";
import {Controls} from "../Controls";
import {Hero} from "../Hero";
import ticker from "../../ticker";
import app$ from "../../app";
import hero$ from "../../hero";
import ticker$ from "../../ticker";
import {Enemies} from "../Enemies";

export class GameStage extends Stage {
    controls: Controls;
    world: World;
    enemies: Enemies;

    constructor() {
        super();
        this.controls = new Controls();
    }

    public build () {
        console.log("Build Game");
        this.world = new World();
        this.world.build();

        this.enemies = new Enemies();
        this.enemies.build();


        this.start();
    }

    private start () {
        hero$.load();

        ticker$.start();
    }

    public close () {
        console.log("Close Game");
    }
}