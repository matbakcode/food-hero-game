import {textureWorld} from "../../assets";
import {Container, Sprite, Assets, TilingSprite} from "pixi.js";
import app from "../app";
export class World {

    grass: Container;

    constructor() {
        this.load();
    }

    private load () {
        Assets.load(textureWorld.grass).then((texture) => {
            this.renderGrass();
        });

        Assets.add('textureWorldGrass', textureWorld.grass);
    }

    public init () {
        Assets.load('textureWorldGrass').then(() => {
            this.renderGrass();
        })
    }

    private renderGrass () {
        const textureWorldGrass = Assets.get("textureWorldGrass");
        this.grass = new TilingSprite(textureWorldGrass, app.screen.width, 30);
        this.grass.x = 0;
        this.grass.y = app.screen.height - 30;

        app.stage.addChild(
            this.grass
        )

    }
}

