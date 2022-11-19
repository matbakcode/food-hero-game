import {Container, Sprite, Assets, TilingSprite, Rectangle, Texture} from "pixi.js";
import app from "../app";
import {StageTextures} from "../interfaces";
import {Enemy} from "./Enemy";
import {getRandomNumber} from "../helpers/randomRange";

export class Enemies {

    stack : Array<Enemy>;

    constructor() {
        this.stack = [];
    }

    public build () {
        this.load();
    }

    private load () {
        Assets.loadBundle("game").then(() => {
            this.start();
        });
    }



    private start () {
        this.enemiesCreator();

    }

    private enemiesCreator () {
        const frequency = 0.5;
        this.create();
    }

    private create () {
        const time = getRandomNumber(800, 2000);
        window.setTimeout(() => {
            const enemy = new Enemy();
            this.stack.push(enemy);
            this.create();
        }, time);
    }

    private fruits () {

    }
}

