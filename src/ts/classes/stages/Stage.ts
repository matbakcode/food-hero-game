import {Assets} from "pixi.js";
import {StageTextures} from "../../interfaces";

export class Stage {

    textures: StageTextures;

    protected load (bundle: string) {
        console.log("Load stage textures")
        return Assets.loadBundle(bundle).then((stageTextures) => {
            this.textures = stageTextures;
        });
    }

    public close () {
        console.log("Open")
    }

    public build () {

    }
}