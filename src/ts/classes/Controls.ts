import {keyboard} from "../helpers/keyboard";

import {Game} from "./Game";
import {MovementVector} from "../interfaces";
import {Hero} from "./Hero";

export class Controls {
    constructor(private game: Game, private hero: Hero) {
        this.events();
    }

    private events () {
        const left = keyboard(37),
            right = keyboard(39),
            space = keyboard(32)
        ;

        left.press = () => {
            this.game.state.controlsIsMoving = true;
            this.hero.changeTextureFromVector(MovementVector.LEFT);
            this.game.state.controlVector = MovementVector.LEFT

        };
        left.release = () => {
            this.game.state.controlsIsMoving = true;
            this.hero.changeTextureFromVector(MovementVector.FRONT);
            this.game.state.controlVector = MovementVector.FRONT

        };
        right.press = () => {
            this.game.state.controlsIsMoving = true;
            this.hero.changeTextureFromVector(MovementVector.RIGHT);
            this.game.state.controlVector = MovementVector.RIGHT

        };
        right.release = () => {
            this.game.state.controlsIsMoving = true;
            this.hero.changeTextureFromVector(MovementVector.FRONT);
            this.game.state.controlVector = MovementVector.FRONT
        };
        space.press = () => {
            this.game.state.playerTurnBoost = true;
        }
        space.release = () => {
            this.game.state.playerTurnBoost = false;
        }
    }
}