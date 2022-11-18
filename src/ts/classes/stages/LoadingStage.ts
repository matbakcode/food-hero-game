import {Stage} from "./Stage";
import app$ from "../../app";
import {Text} from "pixi.js";
import stageManager$ from "../../stageManager";
import {MenuStage} from "./MenuStage";

export class LoadingStage extends Stage {

    public build () {
        console.log("Build Loading");
        const text = new Text('Loading', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff1010,
            align: 'center',
        });
        app$.stage.addChild(
            text
        );

        window.setTimeout(() => {
            console.log("Change ");
            console.log(stageManager$);
            stageManager$.change(
                new MenuStage()
            )
        }, 3000);
    }

    public close () {
        console.log("Close Loading");
    }
}