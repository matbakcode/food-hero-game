// @ts-ignore
import heroFront from './images/hero/front/*.png';
// @ts-ignore
import heroRight from './images/hero/right/*.png';
// @ts-ignore
import heroLeft from './images/hero/left/*.png';
// @ts-ignore
import worldGrass from './images/world/ground/grass.png';

const textureHero = {
    front: Object.values(heroFront),
    right: Object.values(heroRight),
    left: Object.values(heroLeft),
};

const textureWorld = {
    grass: worldGrass,
}

export {
    textureHero,
    textureWorld,
}