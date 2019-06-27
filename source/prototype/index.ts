import {SheepSchema} from "./interface";

class Sheep implements SheepSchema {
    public name: string;
    public weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}
