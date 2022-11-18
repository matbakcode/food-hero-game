import {LoadingStage} from "./stages/LoadingStage";
import state$ from "../state";
import app$ from "../app";
import {MenuStage} from "./stages/MenuStage";
import {Stage} from "./stages/Stage";

export class StageManager {


    constructor () {

    }

    public async change (stage: Stage) {

        const currentStage = state$.getStageCurrent();


        if (currentStage !== undefined) {
            await currentStage.close();
        }

        app$.stage.removeChildren();


        state$.setSceneCurrent(
            stage
        );

        stage.build();

    }

}