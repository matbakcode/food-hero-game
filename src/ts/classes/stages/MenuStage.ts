import {Stage} from "./Stage";
import {Sprite} from "pixi.js";
import {sfx} from "../../../assets";


export class MenuStage extends Stage {

    public init () {
        super.load("intro").then(() => this.start());
    }

    public start () {

        sfx.mainTheme.volume = 0.7;
        sfx.mainTheme.play({
            loop: true
        });

        this.renderUI();

    }

    private onButtonHover (button: Sprite) {
        button.scale.set(1.05);
    }

    private onButtonLeave (button: Sprite) {
        button.scale.set(1);
    }

    private onButtonDown () {
        sfx.fantasyButton.play();
        sfx.mainTheme.stop();
        super.next();
    }

    private renderUI () {
        const backgroundSprite = new Sprite(this.textures.introBackground);
        backgroundSprite.x = 0;
        backgroundSprite.y = 0;
        this.game.app.stage.addChild(
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
        buttonStart.on("pointerdown", () => this.onButtonDown());

        this.game.app.stage.addChild(
            buttonStart
        );
    }

}