// @ts-ignore
import heroFront from './images/hero/front/*.png';
// @ts-ignore
import heroRight from './images/hero/right/*.png';
// @ts-ignore
import heroLeft from './images/hero/left/*.png';
// @ts-ignore
import worldGrass from './images/world/ground/grass.png';
// @ts-ignore
import food from './images/food/sprite.png';

const textureHero = {
    front: Object.values(heroFront),
    right: Object.values(heroRight),
    left: Object.values(heroLeft),
};

const textureWorld = {
    grass: worldGrass,
}

const textureFood = {
    food: food,
}

export {
    textureHero,
    textureWorld,
    textureFood,
}