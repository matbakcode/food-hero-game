import {Stage} from "./Stage";
import app$ from "../../app";
import {Assets, Text} from "pixi.js";
import stageManager$ from "../../stageManager";
import {MenuStage} from "./MenuStage";
import {assetsManifest} from "../../../assets";
import {GameStage} from "./GameStage";

export class LoadingStage extends Stage {

    state: {
        progress: number,
    }

    constructor() {
        super();

        this.state = {
            progress: 0
        };
    }

    public build () {
        console.log("Build Loading");
        const text = new Text('LOADING...', {
            fontFamily: 'Arial',
            fontSize: 16,
            fill: "white",
            align: 'center',
            letterSpacing: 6,
        });

        text.anchor.set(0.5);
        text.x = app$.screen.width/2;
        text.y = app$.screen.height/2;

        app$.stage.addChild(
            text
        );

        this.loadAssets().then(() => {
            this.onFinish();
        });

    }

    private async loadAssets () {
        await Assets.init({ manifest: assetsManifest });
    }

    private async onFinish () {
        stageManager$.change(
            // new MenuStage()
            new GameStage()
        )
    }

    public close () {
        console.log("Close Loading");
    }
}