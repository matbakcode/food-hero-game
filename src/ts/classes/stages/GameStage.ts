import {Stage} from "./Stage";
import {World} from "../World";
import {Controls} from "../Controls";
import {Enemies} from "../Enemies";
import {sfx} from "../../../assets";
import {Game} from "../Game";
import {Hero} from "../Hero";
import {Statistics} from "../Statistics";

export class GameStage extends Stage {
    hero: Hero;
    controls: Controls;
    world: World;
    enemies?: Enemies;
    statistics?: Statistics;

    constructor(game: Game) {
        super(game);
    }

    public init () {

        this.hero = new Hero(this.game);
        this.hero.setPosition(
            this.game.app.screen.width/2,
            this.game.app.screen.height - 46
        );

        this.world = new World(this.game);
        this.world.build().then(() => {

            this.statistics = new Statistics(this.game);

            this.world.add(
                this.hero.get()
            );
            this.hero.init();

            this.enemies = new Enemies(this.game, this.hero, this.statistics);
            this.enemies.build();

            this.statistics.build();
            this.hero.refreshCallback = () => {
                this.statistics?.refresh();
            };

            this.controls = new Controls(this.game, this.hero);

            this.start();

        });
    }

    public start () {
        sfx.gameTheme.play({
            loop: true
        });
    }

    public close () {
        console.log("Close Game");
    }
}