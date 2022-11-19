import {Stage} from "./Stage";
import {World} from "../World";
import {Controls} from "../Controls";
import hero$ from "../../hero";
import {Enemies} from "../Enemies";
import statistics$ from "../../statistics";

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
        this.world.build().then(() => {

            this.enemies = new Enemies();
            this.enemies.build();

            statistics$.build();

            this.start();

        });


    }

    private start () {
        hero$.load();
    }

    public close () {
        console.log("Close Game");
    }
}