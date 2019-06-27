import {Jedi} from "./index";

export interface IJediAdapter {
    jedi: Jedi;
    attact: () => number;
}

export interface IJedi {
    level: number;
    attactWithSaber: () => number;
}

export interface ISoldier {
    level: number;
    attact: () => number;
}
