import {Assets,} from "pixi.js";
import {Enemy} from "./Enemy";
import {getRandomNumber} from "../helpers/randomRange";
import {sfx} from "../../assets";
import {Game} from "./Game";
import {Hero} from "./Hero";
import {Statistics} from "./Statistics";

export class Enemies {

    stack : Array<Enemy>;

    constructor(private game: Game, private hero: Hero, private statistics: Statistics) {
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
        this.create();
    }

    private create () {
        const time = getRandomNumber(800, 2000);
        window.setTimeout(() => {
            const enemy = new Enemy(this.game, this.hero, this.statistics);
            this.stack.push(enemy);

            if (this.game.state.playerLife > 0) {
                this.create();
            } else {
                this.gameOver();
            }

        }, time);
    }

    private gameOver () {
        sfx.error.play();
        sfx.gameTheme.stop();
        this.stack.forEach((enemy) => {
            enemy.ticker.stop();
        });
    }
}

