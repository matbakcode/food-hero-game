import {textureHero} from "../../assets";
import assets from "../assets";
import * as PIXI from "pixi.js";
import app from "../app";
import ticker from "../ticker";
import state from "../state";
import {MovementVector} from "./State";


export class Hero {

    player: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(textureHero[MovementVector.FRONT].map(path => PIXI.Texture.from(path as string)));

    constructor () {
        this.loadHeroSprite();
    }

    private loadHeroSprite () {
        Object.keys(textureHero).forEach(key => {
            assets.add(
                textureHero[key]
            )
        });
    }

    public render ({
        x, y
                   }: {
        x: number,
        y: number
    }) {
            this.player.x = x;
            this.player.y = y;
            this.player.anchor.set(0.5,1);
            this.player.animationSpeed = 0.2;
            // this.player.play();

            app.stage.addChild(this.player);

            ticker.add((delta) => {
                if (state.getControlsIsMoving()) {
                   if (state.getControlsVector() === MovementVector.LEFT) {
                       this.move({
                           x: -3
                       });
                   }
                    if (state.getControlsVector() === MovementVector.RIGHT) {
                        this.move({
                            x: 3
                        });
                    }
                }
            });
    }

    public move ({ x = 0, y = 0 }: {x?: number, y?: number}) {
        this.player.x += x;
    }

    public changeTextureFromVector (vector: MovementVector) {
        this.player.stop();
        this.player.textures = textureHero[vector].map(path => PIXI.Texture.from(path as string));
        this.player.play();
    }
}

