import {Container, Sprite, Assets, Text, Graphics} from "pixi.js";
import {StageTextures} from "../interfaces";
import {Game} from "./Game";

export class Statistics {

    game: Game;
    textures: StageTextures | undefined;
    scoreText: Text;
    container: Container;

    constructor(game: Game) {
        this.game = game;
        this.container = new Container();

        this.scoreText = new Text('0', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: "white",
            align: 'center',
        });
    }

    public build () {
        this.load();
    }

    private load () {
        Assets.loadBundle("ui").then((textures) => {
            this.textures = textures;
            this.render();
        });

    }

    private render () {

        this.container.removeChildren();

        if (this.textures) {
            const uiLifeBar = new Sprite(this.textures.lifeBar);
            uiLifeBar.x = 40;
            uiLifeBar.y = 40;

            const uiBoostBar = new Sprite(this.textures.boostBar);
            uiBoostBar.x = this.game.app.screen.width - 40;
            uiBoostBar.y = 34;
            uiBoostBar.anchor.set(1, 0);

            const uiCoin = new Sprite(this.textures.coinBar);
            uiCoin.x = 40;
            uiCoin.y = 84;

            let hpBar = new Graphics();
            hpBar.beginFill(0xC0392B);
            let hpPortion = this.game.state.playerLife / 10;
            hpBar.drawRect(
                62, 51, (200 * hpPortion), 15
            );
            hpBar.endFill();

            let boostBar = new Graphics();
            boostBar.beginFill(0xF5B041);
            let boostPortion = this.game.state.playerBoost / 100;
            boostBar.drawRect(
                940, 51, (200 * boostPortion), 15
            );
            boostBar.endFill();

            this.scoreText.x = 80;
            this.scoreText.y = 84;

            this.container.addChild(
                hpBar,
                boostBar,
                uiLifeBar,
                uiBoostBar,
                uiCoin,
                this.scoreText,
            );

            this.game.app.stage.addChild(
                this.container
            )
        }
    }

    public refresh () {
        this.scoreText.text = this.game.state.playerScore;
        this.render();
    }

}

