import {Stage} from "./Stage";
import app$ from "../../app";
import {Sprite} from "pixi.js";
import stageManager$ from "../../stageManager";
import {GameStage} from "./GameStage";

export class MenuStage extends Stage {

    public build () {
        super.load("intro").then(() => this.start());
    }

    private start () {
        const backgroundSprite = new Sprite(this.textures.background);
        backgroundSprite.x = 0;
        backgroundSprite.y = 0;
        app$.stage.addChild(
            backgroundSprite
        );
        const buttonStart = new Sprite(this.textures.start);
        buttonStart.x = 180;
        buttonStart.y = 650;
        buttonStart.anchor.set(0.5);

        buttonStart.interactive = true;
        buttonStart.cursor = 'pointer';
        buttonStart.on("pointerover", () => this.onButtonHover(buttonStart));
        buttonStart.on("pointerleave", () => this.onButtonLeave(buttonStart));
        buttonStart.on("pointerdown", () => this.onButtonDown(buttonStart));

        app$.stage.addChild(
            buttonStart
        );
    }

    private onButtonHover (button: Sprite) {
        button.scale.set(1.05);
    }

    private onButtonLeave (button: Sprite) {
        button.scale.set(1);
    }

    private onButtonDown (button: Sprite) {
        stageManager$.change(
            new GameStage()
        )
    }

    public close () {
        console.log("Close Menu");
    }

}