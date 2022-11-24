import {Stage} from "./Stage";
import {Assets, Text} from "pixi.js";
import {assetsManifest, sfx} from "../../../assets";
import {sound} from "@pixi/sound";
import {Game} from "../Game";

export class LoadingStage extends Stage {

    state: {
        progress: number,
    }

    constructor(game: Game, nextCallback?: Function) {
        super(game, nextCallback);

        this.state = {
            progress: 0 // is too fast :)
        };
    }

    public init () {
        console.log("Build Loading");

        this.renderLoadingInterface();

        this.addAssets().then(() => {
            window.setTimeout(() => {
                super.next();
            }, 2000);
        });

    }

    private async addAssets () {
        await Assets.init({ manifest: assetsManifest });
        await sound.add("mainTheme", sfx.mainTheme);
        await sound.add("fantasyButton", sfx.fantasyButton);
        await sound.add("error", sfx.error);
        await sound.add("beep", sfx.beep);
        await sound.add("gameTheme", sfx.gameTheme);
        await sound.add("punch", sfx.punch);
    }



    private renderLoadingInterface () {
        const text = new Text('LOADING...', {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: "white",
            align: 'center',
            letterSpacing: 6,
        });

        text.anchor.set(0.5);
        text.x = this.game.app.screen.width/2;
        text.y = this.game.app.screen.height/2;

        this.game.app.stage.addChild(
            text
        );
    }
}