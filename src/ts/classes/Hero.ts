import { heroFrames } from "../../assets";
import assets from "../assets";
import * as PIXI from "pixi.js";
import app from "../app";

export enum HeroPosition {
    FRONT  = "front",
    LEFT   = "left",
    RIGHT  = "right"
}


export class Hero {

    position: HeroPosition = HeroPosition.FRONT;

    constructor () {
        this.loadHeroSprite();
    }

    private loadHeroSprite () {
        Object.keys(heroFrames).forEach(key => {
            assets.add(
                heroFrames[key]
            )
        });
    }

    public render () {

            const playerIdle: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(heroFrames[this.position].map(path => PIXI.Texture.from(path)));
            /*
            * An AnimatedSprite inherits all the properties of a PIXI sprite
            * so you can change its position, its anchor, mask it, etc
            */
            playerIdle.x = 100;
            playerIdle.y = 150;
            playerIdle['vx'] = 1;
            playerIdle.anchor.set(0, 1);
            // playerIdle.anchor.set(0.5);
            playerIdle.animationSpeed = 0.2;
            playerIdle.play();

            app.stage.addChild(playerIdle);
    }
}

