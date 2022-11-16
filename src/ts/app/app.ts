import { heroFrames } from '../../assets/loader';
import * as PIXI from 'pixi.js';
import {Assets} from "pixi.js";

interface HeroFrames {
    front: string[];
    right: string[];
    left:  string[];
}


const playerFrames: HeroFrames = heroFrames;
const currentFrame: keyof HeroFrames = 'left';

export class BootGame {

    private app: PIXI.Application;

    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        // @ts-ignore
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR

        this.loadAssets();
    }

    private loadAssets () {
        const promises = [];
        Object.keys(playerFrames).forEach(key => {
            promises.push(Assets.load(playerFrames[key]));
        });

        Promise.all(promises).then(() => {
            this.onAssetsLoaded();
        });


    }

    private onAssetsLoaded() {

        const playerIdle: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(playerFrames[currentFrame].map(path => PIXI.Texture.from(path)));
        console.log(playerIdle);
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

        this.app.stage.addChild(playerIdle);
    }

}
