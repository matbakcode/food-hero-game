import {Assets, Rectangle, Resource, Sprite, Texture, Ticker} from "pixi.js";
import app from "../app";
import {getRandomNumber} from "../helpers/randomRange";
import app$ from "../app";
import hero$ from "../hero";
import state$ from "../state";
import statistics$ from "../statistics";

export class Enemy {

    texture: Texture<Resource> | Record<string, Texture<Resource>>;
    item: Sprite;
    ticker: Ticker;
    rotationSpeed: number;
    downSpeed: number;

    constructor() {
        this.texture = Assets.get("food");
        if (this.texture) {
            this.render();
        }
    }

    private render () {
        this.rotationSpeed = getRandomNumber(0, 0.15);
        this.downSpeed = Math.floor(getRandomNumber(2, 6));
        const positionX = getRandomNumber(32, app$.screen.width-32);
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
        app.stage.addChild(
            this.item
        );

        this.run();
    }

    public run() {
        this.ticker = new Ticker();
        this.ticker.add((delta) => {
            this.item.y += this.downSpeed;
            this.item.rotation += this.rotationSpeed;
            this.item.anchor.set(0.5);
            this.detectionCollisionWithGround();
            this.detectionCollisionWithHero();
        });
        this.ticker.start();
    }

    private detectionCollisionWithGround () {
        if (this.item.y > app$.screen.height - 48) {
            this.smash();
        }
    }

    private detectionCollisionWithHero () {
        if (
            this.item.getBounds().intersects(
                hero$.getBoundsCollision()
            )
        ) {
            this.destroy();

        }
    }

    private destroy () {
        this.ticker.destroy();
        this.item.destroy();
        state$.addScore();
        statistics$.refresh();

    }

    private smash () {
        this.item.height = 12;
        this.item.rotation = 0;
        this.ticker.destroy();
        state$.loseLife();
        statistics$.refresh();
    }
}

