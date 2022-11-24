import {MovementVector} from "../interfaces";
import {AnimatedSprite, Rectangle, Texture, Ticker} from "pixi.js";
import {heroTextures} from "../../assets";
import {Game} from "./Game";


export class Hero {
    private ticker = new Ticker();
    private readonly player: AnimatedSprite;
    private textures = {
        [MovementVector.FRONT]: heroTextures[MovementVector.FRONT].map(path => Texture.from(path as string)),
        [MovementVector.LEFT]: heroTextures[MovementVector.LEFT].map(path => Texture.from(path as string)),
        [MovementVector.LEFT]: heroTextures[MovementVector.LEFT].map(path => Texture.from(path as string)),
        [MovementVector.RIGHT]: heroTextures[MovementVector.RIGHT].map(path => Texture.from(path as string)),
    };
    refresh: Function = () => {}

    constructor (private game: Game) {
        this.player = new AnimatedSprite(this.textures[MovementVector.FRONT]);
        this.player.height = 120;
        this.player.width = 120;
        this.player.anchor.set(0.5,1);
        this.player.animationSpeed = 0.1;
        this.player.play();
        this.player.zIndex = 50;
    }


    public init () {
        this.render();
    }

    public setPosition (x: number = 0, y: number = 0) {
        this.player.x = x;
        this.player.y = y;
    }

    public get () {
        return this.player;
    }

    public render () {


        this.ticker = new Ticker();

        this.ticker.add(() => {

            if (this.game.state.playerLife > 0) {
                if (this.game.state.controlsIsMoving) {
                    const speed = 6 + (this.game.state.withBoost && this.game.state.playerIsBoostExist ? 6 : 0);

                    if (this.game.state.controlsVector === MovementVector.LEFT) {
                        if (this.player.getBounds().x > -30) {
                            this.move({
                                x: speed * -1
                            });
                            if (this.game.state.withBoost) {
                                this.game.state.playerUsingBoost();
                                this.refresh();
                            }
                        }
                    }
                    if (this.game.state.controlsVector === MovementVector.RIGHT) {
                        if ((this.player.getBounds().x + this.player.getBounds().width-30) < this.game.app.screen.width) {
                            this.move({
                                x: speed
                            });
                            if (this.game.state.withBoost) {
                                this.game.state.playerUsingBoost();
                                this.refresh();
                            }
                        }
                    }
                }
            }
        });

        this.ticker.start();
    }

    public set refreshCallback (refresh: Function) {
        this.refresh = refresh;
    }

    public move ({ x = 0}: {x?: number, y?: number}) {
        this.player.x += x;
    }

    public changeTextureFromVector (vector: MovementVector) {
        this.player.stop();
        this.player.textures = this.textures[vector] ?? [];
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

