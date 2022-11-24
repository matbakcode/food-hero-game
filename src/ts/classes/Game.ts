import {LoadingStage} from "./stages/LoadingStage";
import {StageManager} from "./StageManager";
import {MenuStage} from "./stages/MenuStage";
import {Application} from "pixi.js";
import {initialState, State} from "./State";
import {GameStage} from "./stages/GameStage";



export enum STAGES {
    LOADING = "loading",
    MENU = "menu",
    GAME = "game",
}

export class Game {

    state: State;
    app: Application;
    stageManager: StageManager;

    constructor(parent: HTMLElement) {

        this.state = new State(initialState);

        this.app = new Application({
            width: this.state.stageWidth,
            height: this.state.stageHeight,
            backgroundColor : 0x000000,
            antialias: true,
        });


        // @ts-ignore
        parent.appendChild(this.app.view); // Hack for parcel HMR
    }

    public async init () {

        this.stageManager = new StageManager({
            [STAGES.LOADING]: new LoadingStage(this, () => this.stageManager.run(STAGES.MENU)),
            [STAGES.MENU]: new MenuStage(this, () => this.stageManager.run(STAGES.GAME)),
            [STAGES.GAME]: new GameStage(this), // nextCallback Will be Game Over Screen
        }, this);


        this.run();
    }

    private run () {
        this.stageManager.run(
            STAGES.LOADING
        )
    }

}
