import {Container, Sprite, Assets, TilingSprite} from "pixi.js";
import {StageTextures} from "../interfaces";
import {Game} from "./Game";

export class World {
    game: Game;
    grass: Container;
    textures: StageTextures;

    constructor(game: Game) {
        this.game = game;
    }

    public async build () {
        await this.load();
    }

    private async load () {
        await Assets.loadBundle("world").then((stageTextures) => {
            this.textures = stageTextures;
            this.createWorld();
        });
    }

    private createWorld () {
        this.renderBackground();
        this.renderGrass();
    }

    private renderGrass () {

        this.grass = new TilingSprite(this.textures.grass, this.game.app.screen.width, 48);
        this.grass.x = 0;
        this.grass.y = this.game.app.screen.height - 48;
        this.grass.zIndex = 15;

        this.game.app.stage.addChild(
            this.grass
        )
    }

    public add (Object: any) {
        this.game.app.stage.addChild(
            Object
        )
    }

    private renderBackground () {
        const backgroundSprite = new Sprite(this.textures.worldBackground);
        backgroundSprite.x = 0;
        backgroundSprite.y = 0;
        backgroundSprite.zIndex = 10;
        this.game.app.stage.addChild(
            backgroundSprite
        );
    }
}

