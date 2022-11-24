import {Game} from "../Game";
import {StageTextures} from "../../interfaces";
import {Assets} from "pixi.js";

export class Stage {

    textures: StageTextures;

    constructor(protected game: Game, protected nextCallback?: Function) {}

    public init () {}

    protected load (bundle: string) {
        console.log("Load stage textures")
        return Assets.loadBundle(bundle).then((stageTextures) => {
            this.textures = stageTextures;
        });
    }

    public stop () {}

    protected next () {
        if (this.nextCallback) {
            this.nextCallback();
        }
    }
}