export enum MovementVector {
    LEFT = "left", RIGHT = "right", FRONT = "front"
}

export interface StateInterface {
    stage: {
        width: number,
        height: number,
    },
    controls: {
        speed: number,
        isMoving: boolean,
        vector: MovementVector,
    }
}

export const initialState = <StateInterface>{
    stage: {
        width: 1200,
        height: 800,
    },
  controls: {
      speed: 3,
      isMoving: false,
      vector: MovementVector.FRONT,
  }
};



export class State {

    state: StateInterface;

    constructor (initialState: StateInterface) {
        this.state = initialState;
    }

    public get () {
        return this.state;
    }

    public setControlVector (vector: MovementVector) {
        this.state.controls.vector = vector;
    }

    public setIsMoving (isMoving) {
        this.state.controls.isMoving = isMoving;
    }

    public getControlsIsMoving () {
        return this.state.controls.isMoving;
    }

    public getControlsVector () {
        return this.state.controls.vector;
    }
}

