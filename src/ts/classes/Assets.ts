import {Assets as AssetsPixi } from "pixi.js";

export class Assets {

    bucket = [];

    public add ( path: string, name?: string ) {
        AssetsPixi.add(name, path);
    }

    public onLoad (): Promise<void> {
        return Promise.all(this.bucket).then(() => {

        });
    }
}

