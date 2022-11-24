import {Stage} from "./stages/Stage";
import {CONFIG} from "../config";
import {MovementVector, StateInterface} from "../interfaces";

export const initialState = <StateInterface>{
    stage: {
        current: undefined,
        width: CONFIG.STAGE_WIDTH,
        height: CONFIG.STAGE_HEIGHT,
    },
    boost: false,
    controls: {
        speed: CONFIG.CONTROLS_HERO_SPEED,
        isMoving: false,
        vector: MovementVector.FRONT,
    },
    player: {
        score: 0,
        life: CONFIG.PLAYER_LIFES_MAX,
        boost: CONFIG.PLAYER_BOOST_MAX,
    }
};

export class State {

    constructor(private readonly state: StateInterface = initialState) {}

    public set controlsIsMoving(isMoving: boolean) {
        this.state.controls.isMoving = isMoving;
    }

    public get controlsIsMoving() {
        return this.state.controls.isMoving;
    }

    public get stageCurrent (): Stage | undefined {
        return this.state.stage.current;
    }

    public get controlsVector() {
        return this.state.controls.vector;
    }

    public get playerIsBoostExist () {
        return this.state.boost && this.state.player.boost > 0;
    }

    public get playerScore () {
        return this.state.player.score;
    }

    public get playerLife () {
        return this.state.player.life;
    }

    public get playerBoost () {
        return this.state.player.boost;
    }

    public get withBoost () {
        return this.state.boost;
    }

    public set stageCurrent (stage: Stage | undefined) {
        this.state.stage.current = stage;
    }

    public get stageWidth () {
        return this.state.stage.width;
    }

    public get stageHeight () {
        return this.state.stage.height;
    }

    public set controlVector(vector: MovementVector) {
        this.state.controls.vector = vector;
    }

    public set playerTurnBoost (isTurn: boolean) {
        this.state.boost = isTurn;
    }

    public playerUsingBoost () {
        this.state.player.boost -= CONFIG.BOOST_DROP_PER_FRAME;
        if (this.state.player.boost < 0) this.state.player.boost = 0;
    }

    public playerLoseLife () {
        this.state.player.life -= CONFIG.SCORE_SINGLE_VALUE;
    }

    public playerAddScore () {
        this.state.player.score += CONFIG.SCORE_SINGLE_VALUE;

        if (this.state.player.boost < CONFIG.PLAYER_BOOST_MAX) {
            this.state.player.boost += CONFIG.BOOST_EXTRA_PER_SCORE;
            if (this.state.player.boost > CONFIG.PLAYER_BOOST_MAX)
                this.state.player.boost = CONFIG.PLAYER_BOOST_MAX;
        }
    }
}

