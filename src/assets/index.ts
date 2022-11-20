import heroFront from './images/hero/front/*.png';
import heroRight from './images/hero/right/*.png';
import heroLeft from './images/hero/left/*.png';
import worldGrass from './images/world/ground/grass.png';
import worldBackground from './images/world/forest.png';
import food from './images/food/sprite.png';
import introBg from './images/intro/intro.png';
import introUiStart from './images/intro/start.png';
import uiLifeBar from './images/ui/ui-life-bar.png';
import uiBoostBar from './images/ui/ui-boostbar.png';
import uiScore from './images/ui/ui-score.png';
import mainTheme from './sounds/mainTheme.mp3';
import fantasyButton from './sounds/fantasyButton.mp3';
import beep from './sounds/beep.mp3';
import error from './sounds/error.mp3';
import gameTheme from './sounds/gameTheme.mp3';
import punch from './sounds/punch.mp3';
import {Sound} from "@pixi/sound";

export const assetsManifest = {
    bundles: [
        {
            name: 'intro',
            assets: [
                {
                    name: 'start',
                    srcs: introUiStart,
                },
                {
                    name: 'introBackground',
                    srcs: introBg,
                },
            ],
        },
        {
            name: 'world',
            assets: [
                {
                    name: 'grass',
                    srcs: worldGrass,
                },
                {
                    name: 'worldBackground',
                    srcs: worldBackground,
                },
            ],
        },
        {
            name: 'game',
            assets: [
                {
                    name: 'food',
                    srcs: food,
                },
            ],
        },
        {
            name: 'hero',
            assets: [
                {
                    name: 'front',
                    srcs: Object.values(heroFront) as Array<string>,
                },
                {
                    name: 'left',
                    srcs: Object.values(heroLeft) as Array<string>,
                },
                {
                    name: 'right',
                    srcs: Object.values(heroRight) as Array<string>,
                },
            ]
        },
        {
            name: 'ui',
            assets: [
                {
                    name: 'lifeBar',
                    srcs: uiLifeBar,
                },
                {
                    name: 'boostBar',
                    srcs: uiBoostBar,
                },
                {
                    name: 'coinBar',
                    srcs: uiScore,
                },
            ],
        },
    ],
};

export const sfx = {
    mainTheme: Sound.from(mainTheme),
    fantasyButton: Sound.from(fantasyButton),
    beep: Sound.from(beep),
    error: Sound.from(error),
    gameTheme: Sound.from(gameTheme),
    punch: Sound.from(punch),
}


export const heroTextures = {
    front: Object.values(heroFront),
    left: Object.values(heroLeft),
    right: Object.values(heroRight),
}