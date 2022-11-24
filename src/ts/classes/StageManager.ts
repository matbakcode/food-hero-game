import {Stage} from "./stages/Stage";
import {Game, STAGES} from "./Game";



export class StageManager {

    constructor(
        private stages: {
            [key: string]: Stage
        },
        private game: Game,
    ) {}

    run (stage: STAGES) {
        if (this.stages[stage]) {
            const currentStage = this.game.state.stageCurrent;

            if (currentStage !== undefined) {
                currentStage.stop();
            }

            this.game.app.stage.removeChildren();

            this.game.state.stageCurrent = this.stages[stage];

            this.game.state.stageCurrent.init();
        }
    }

}