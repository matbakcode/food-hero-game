import {textureFood, textureWorld} from "../../assets";
import {Container, Sprite, Assets, TilingSprite} from "pixi.js";
import app from "../app";
import * as PIXI from "pixi.js";
export class World {

    grass: Container;

    constructor() {
        this.load();
    }

    private load () {

        Assets.addBundle('world', {
            grass: 'bunny.png',
            chicken: 'chicken.png',
            thumper: 'thumper.png',
        });

        Assets.add('textureWorldGrass', textureWorld.grass);
        Assets.add('textureFoodMix', textureFood.food);

        Assets.load(textureWorld.grass).then((texture) => {
            this.renderGrass();
        });
        Assets.load(textureFood.food).then((texture) => {
            const frame = new PIXI.Rectangle(0, 0, 64, 64);
            const foodTextures = new PIXI.Texture(texture, frame);
            const image = new PIXI.Sprite(foodTextures);
            image.width = 64;
            image.height = 64;
            image.x = 100;
            image.y = 100;

            app.stage.addChild(
                image
            )
        });


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

    private fruits () {

    }
}

