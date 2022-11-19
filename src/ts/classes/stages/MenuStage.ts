import {Stage} from "./Stage";
import app$ from "../../app";
import {Assets, Sprite} from "pixi.js";
import stageManager$ from "../../stageManager";
import {GameStage} from "./GameStage";
import {sfx} from "../../../assets";


export class MenuStage extends Stage {

    public build () {
        super.load("intro").then(() => this.start());
    }

    private start () {
        sfx.mainTheme.volume = 0.7;
        sfx.mainTheme.play();
        const backgroundSprite = new Sprite(this.textures.introBackground);
        backgroundSprite.x = 0;
        backgroundSprite.y = 0;
        app$.stage.addChild(
            backgroundSprite
        );
        const buttonStart = new Sprite(this.textures.start);
        buttonStart.x = 280;
        buttonStart.y = 464;
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
        sfx.fantasyButton.play();
        sfx.mainTheme.stop();
        stageManager$.change(
            new GameStage()
        )
    }

}