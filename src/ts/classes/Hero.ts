import * as PIXI from "pixi.js";
import app from "../app";
import ticker from "../ticker";
import state from "../state";
import {MovementVector} from "./State";
import {Assets, Resource, Texture} from "pixi.js";
import {heroTextures} from "../../assets";
import app$ from "../app";


export class Hero {

    player: PIXI.AnimatedSprite;
    textures: {
        [key in MovementVector]?: Texture<Resource>[]
    };

    constructor() {

    }

    public load () {
        Assets.loadBundle("hero").then(() => {
            this.textures = {
                [MovementVector.FRONT]: heroTextures[MovementVector.FRONT].map(path => PIXI.Texture.from(path as string)),
                [MovementVector.LEFT]: heroTextures[MovementVector.LEFT].map(path => PIXI.Texture.from(path as string)),
                [MovementVector.LEFT]: heroTextures[MovementVector.LEFT].map(path => PIXI.Texture.from(path as string)),
                [MovementVector.RIGHT]: heroTextures[MovementVector.RIGHT].map(path => PIXI.Texture.from(path as string)),
            };
            this.render();
        });
    }

    public get () {
        return this.player;
    }

    public render () {

        console.log(this.textures);

        this.player = new PIXI.AnimatedSprite(this.textures.front);
        this.player.x = app$.screen.width/2;
        this.player.y = app$.screen.height - 48;
        this.player.anchor.set(0.5,1);
        this.player.animationSpeed = 0.2;
        this.player.play();

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
        this.player.textures = this.textures[vector];
        this.player.play();
    }
}

