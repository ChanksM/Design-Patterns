import {IColor} from "./interface";

class Color {
    constructor(public name: string) {}
}

class ColorFactory {
    public colors: IColor;

    constructor(name: string) {
        this.colors = {}
    }

    public create(name: string) {
        const color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {Color};
