import {
    BwmModels,
    BwmSchema,
} from "./interfaces";

class BmwFactory {

    public create(type: BwmModels) {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

class Bmw implements BwmSchema {
    constructor(public model: string, public price: number, public maxSpeed: number) {}
}
