import {keyboard} from "../helpers/keyboard";
import state from "../state";
import {MovementVector} from "./State";
import hero from "../hero";

export class Controls {
    constructor() {
        this.events();
    }

    private events () {
        const left = keyboard(37),
            right = keyboard(39),
            space = keyboard(32)
        ;

        left.press = () => {
            state.setIsMoving(true);
            hero.changeTextureFromVector(MovementVector.LEFT);
            state.setControlVector(
                MovementVector.LEFT
            )
        };
        left.release = () => {
            state.setIsMoving(false);
            hero.changeTextureFromVector(MovementVector.FRONT);
            state.setControlVector(
                MovementVector.FRONT
            )
        };
        right.press = () => {
            state.setIsMoving(true);
            hero.changeTextureFromVector(MovementVector.RIGHT);
            state.setControlVector(
                MovementVector.RIGHT
            )
        };
        right.release = () => {
            state.setIsMoving(false);
            hero.changeTextureFromVector(MovementVector.FRONT);
            state.setControlVector(
                MovementVector.FRONT
            )
        };
        space.press = () => {
            state.setTurnOnBoost();
        }
        space.release = () => {
            state.setTurnOffBoost();
        }
    }
}