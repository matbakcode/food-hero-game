import {Assets as AssetsPixi } from "pixi.js";

export class Assets {

    bucket = [];

    public add ( path: string ) {
        this.bucket.push(AssetsPixi.load(path));
    }

    public onLoad (): Promise<void> {
        return Promise.all(this.bucket).then(() => {

        });
    }
}

