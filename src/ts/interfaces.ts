import {Texture} from "pixi.js";
import {Stage} from "./classes/stages/Stage";

export interface StageTextures {
    [key: string]: Texture
}

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