import {Container, Sprite, Assets, TilingSprite} from "pixi.js";
import app from "../app";
import {StageTextures} from "../interfaces";

export class World {

    grass: Container;
    textures: StageTextures;

    public build () {
        this.load();
    }

    private load () {
        Assets.loadBundle("world").then((stageTextures) => {
            this.textures = stageTextures;
            this.createWorld();
        });
    }

    private createWorld () {
        this.renderGrass();
    }

    private renderGrass () {

        this.grass = new TilingSprite(this.textures.grass, app.screen.width, 48);
        this.grass.x = 0;
        this.grass.y = app.screen.height - 48;

        app.stage.addChild(
            this.grass
        )


    }
}

