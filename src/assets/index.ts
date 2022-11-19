import heroFront from './images/hero/front/*.png';
import heroRight from './images/hero/right/*.png';
import heroLeft from './images/hero/left/*.png';
import worldGrass from './images/world/ground/grass.png';
import food from './images/food/sprite.png';
import introBg from './images/intro/intro.png';
import introUiStart from './images/intro/start.png';

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
                    name: 'background',
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
        }
    ],
};

export const heroTextures = {
    front: Object.values(heroFront),
    left: Object.values(heroLeft),
    right: Object.values(heroRight),
}