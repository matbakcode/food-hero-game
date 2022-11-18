import * as PIXI from "pixi.js";
import app from "../app";
import stageManager$ from "../stageManager";
import {LoadingStage} from "./stages/LoadingStage";


export class Game {

    private app: PIXI.Application;

    constructor(parent: HTMLElement) {

        this.app = app;

        // @ts-ignore
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR
    }

    public init () {

        // Start from Loading
        stageManager$.change(
            new LoadingStage()
        );
    }


}
