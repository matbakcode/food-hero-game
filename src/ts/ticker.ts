import { Ticker } from 'pixi.js';

const ticker = Ticker.shared;

ticker.autoStart = false;

ticker.stop();

export default ticker;