import {Assets, Rectangle, Resource, Sprite, Texture, Ticker} from "pixi.js";
import {getRandomNumber} from "../helpers/randomRange";
import {sfx} from "../../assets";
import {Game} from "./Game";
import {Hero} from "./Hero";
import {Statistics} from "./Statistics";

export class Enemy {

    texture: Texture<Resource> | Record<string, Texture<Resource>>;
    item?: Sprite;
    ticker: Ticker;
    rotationSpeed: number;
    downSpeed: number;

    constructor(private game: Game, private hero: Hero, private statistics: Statistics)
    {
        this.ticker = new Ticker();
        this.texture = Assets.get("food");
        this.rotationSpeed = getRandomNumber(0, 0.15);
        this.downSpeed = Math.floor(getRandomNumber(2, 6));
        if (this.texture) {
            this.render();
        }
    }

    private render () {

        const positionX = getRandomNumber(32, this.game.app.screen.width-32);
        const spriteCordsX = Math.floor(getRandomNumber(0,7));
        const spriteCordsY = Math.floor(getRandomNumber(0,7));
        const frame = new Rectangle(spriteCordsX*64, spriteCordsY*64, 64, 64);
        // @ts-ignore
        const foodTextures = new Texture(this.texture.baseTexture, frame);
        this.item = new Sprite(foodTextures);
        this.item.width = 64;
        this.item.height = 64;
        this.item.x = positionX;
        this.item.y = -64;
        this.game.app.stage.addChild(
            this.item
        );

        this.run();
    }

    public run() {
        this.ticker.add(() => {
            if (this.item) {
                this.item.y += this.downSpeed;
                this.item.rotation += this.rotationSpeed;
                this.item.anchor.set(0.5);
                this.detectionCollisionWithGround();
                this.detectionCollisionWithHero();
            }

        });
        this.ticker.start();

    }

    private detectionCollisionWithGround () {
        if (this.item) {
            if (this.item.y > this.game.app.screen.height - 48) {
                this.smash();
            }
        }

    }

    private detectionCollisionWithHero () {
        if (this.item) {
            if (
                this.item.getBounds().intersects(
                    this.hero.getBoundsCollision()
                )
            ) {
                this.destroy();

            }
        }

    }

    private destroy () {
        this.ticker.destroy();
        if (this.item) {
            this.item.destroy();
        }
        this.game.state.playerAddScore();
        this.statistics.refresh();
        sfx.beep.play();

    }

    private smash () {
        if (this.item) {
            this.item.height = 16;
            this.item.rotation = 0;
            this.ticker.destroy();
            this.game.state.playerLoseLife();
            this.statistics.refresh();
            sfx.punch.play();
        }

    }
}

