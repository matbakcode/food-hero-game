import {Stage} from "./Stage";
import app$ from "../../app";
import {Text} from "pixi.js";
import stageManager$ from "../../stageManager";
import {GameStage} from "./GameStage";

export class MenuStage extends Stage {

    public build () {
        console.log("Build Menu");
        const text = new Text('Menu', {
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
            stageManager$.change(
                new GameStage()
            )
        }, 3000);
    }

    public close () {
        console.log("Close Menu");


    }

}