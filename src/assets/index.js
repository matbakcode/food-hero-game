import heroFront from './images/hero/front/*.png';
import heroRight from './images/hero/right/*.png';
import heroLeft from './images/hero/left/*.png';
import {HeroPosition} from "../ts/classes/Hero";

export const heroFrames = {
    front: Object.values(heroFront),
    right: Object.values(heroRight),
    left: Object.values(heroLeft),
};
