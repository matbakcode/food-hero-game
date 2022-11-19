import {Container, Sprite, Assets, TilingSprite} from "pixi.js";
import app from "../app";
import {StageTextures} from "../interfaces";
import app$ from "../app";
import worldBackground from "../../assets/images/world/forest.png";

export class World {

    grass: Container;
    textures: StageTextures;

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

        this.grass = new TilingSprite(this.textures.grass, app.screen.width, 48);
        this.grass.x = 0;
        this.grass.y = app.screen.height - 48;
        this.grass.zIndex = 15;
        console.log("here");

        app.stage.addChild(
            this.grass
        )
    }

    private renderBackground () {
        const backgroundSprite = new Sprite(this.textures.worldBackground);
        backgroundSprite.x = 0;
        backgroundSprite.y = 0;
        backgroundSprite.zIndex = 10;
        app$.stage.addChild(
            backgroundSprite
        );
    }
}

