import {Stage} from "./stages/Stage";

export enum MovementVector {
    LEFT = "left", RIGHT = "right", FRONT = "front"
}

export interface StateInterface {
    stage: {
        current: Stage | undefined,
        width: number,
        height: number,
    },
    boost: boolean;
    controls: {
        speed: number,
        isMoving: boolean,
        vector: MovementVector,
    },
    player: {
        score: number,
        life: number,
        boost: number,
    }
}

export const initialState = <StateInterface>{
    stage: {
        current: undefined,
        width: 1200,
        height: 800,
    },
    boost: false,
    controls: {
        speed: 3,
        isMoving: false,
        vector: MovementVector.FRONT,
    },
    player: {
        score: 0,
        life: 10,
        boost: 100,
    }
};


export class State {

    state: StateInterface;

    constructor(initialState: StateInterface) {
        this.state = initialState;
    }

    public get() {
        return this.state;
    }

    public setControlVector(vector: MovementVector) {
        this.state.controls.vector = vector;
    }

    public setIsMoving(isMoving) {
        this.state.controls.isMoving = isMoving;
    }

    public getControlsIsMoving() {
        return this.state.controls.isMoving;
    }

    public getControlsVector() {
        return this.state.controls.vector;
    }

    public setSceneCurrent (stage: Stage) {
        this.state.stage.current = stage;
    }

    public getStageCurrent (): Stage {
        return this.state.stage.current;
    }

    public setTurnOnBoost () {
        this.state.boost = true;
    }

    public setTurnOffBoost () {
        this.state.boost = false;
    }

    public getBoost () {
        return this.state.boost && this.state.player.boost > 0;
    }

    public useBoost () {
        this.state.player.boost -= 1;
    }

    public loseLife () {
        this.state.player.life -= 1;
    }

    public addScore () {
        this.state.player.score += 1;

        if (this.state.player.boost < 100) {
            this.state.player.boost += 10;
            if (this.state.player.boost > 100) this.state.player.boost = 100;
        }
    }
}

