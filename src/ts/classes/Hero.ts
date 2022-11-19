import * as PIXI from "pixi.js";
import app from "../app";
import state from "../state";
import {MovementVector} from "./State";
import {Assets, Rectangle, Resource, Texture, Ticker} from "pixi.js";
import {heroTextures} from "../../assets";
import app$ from "../app";
import state$ from "../state";
import statistics$ from "../statistics";


export class Hero {
    ticker: Ticker;
    player: PIXI.AnimatedSprite;
    textures: {
        [key in MovementVector]?: Texture<Resource>[]
    };

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
        this.player = new PIXI.AnimatedSprite(this.textures.front);
        this.player.x = app$.screen.width/2;
        this.player.y = app$.screen.height - 46;
        this.player.height = 120;
        this.player.width = 120;
        this.player.anchor.set(0.5,1);
        this.player.animationSpeed = 0.2;
        this.player.play();
        this.player.zIndex = 50;

        app.stage.addChild(this.player);

        this.ticker = new Ticker();

        this.ticker.add((delta) => {

            if (state.getControlsIsMoving()) {
                const speed = 6 + (state$.getBoost() ? 6 : 0);

                if (state.getControlsVector() === MovementVector.LEFT) {
                    if (this.player.getBounds().x > -30) {
                        this.move({
                            x: speed * -1
                        });
                        if (state$.getBoost()) {
                            state$.useBoost();
                            statistics$.refresh();
                        }
                    }
                }
                if (state.getControlsVector() === MovementVector.RIGHT) {
                    if ((this.player.getBounds().x + this.player.getBounds().width-30) < app$.screen.width) {
                        this.move({
                            x: speed
                        });
                        if (state$.getBoost()) {
                            state$.useBoost();
                            statistics$.refresh();
                        }
                    }
                }
            }
        });

        this.ticker.start();
    }

    public move ({ x = 0, y = 0 }: {x?: number, y?: number}) {
        this.player.x += x;
    }

    public changeTextureFromVector (vector: MovementVector) {
        this.player.stop();
        this.player.textures = this.textures[vector];
        this.player.play();
    }

    public getBoundsCollision () {
        const area =  new Rectangle();
        area.width = 30;
        area.height = this.player.height;
        area.y = this.player.y - 100;
        area.x = this.player.x - 15;
        return area;
    }
}

