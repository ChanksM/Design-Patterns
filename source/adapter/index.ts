import {IJedi, IJediAdapter} from "./interface";

class Soldier {

    constructor(public level: number) {
        // this.level = level;
    }

    public attact(): number {
        return this.level * 1;
    }
}

// tslint:disable-next-line: max-classes-per-file
class Jedi implements IJedi {
    public attactWithSaber: () => number;

    constructor(public level: number) {
        // this.level = level;
    }

    public attackWithSaber(): number {
        return this.level * 100;
    }
}

// tslint:disable-next-line: max-classes-per-file
class JediAdapter implements IJediAdapter {
    public attact: () => number;

    constructor(public jedi: Jedi) {
        // this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {Jedi};
