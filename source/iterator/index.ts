import {IIterator} from "./interface";

class Iterator implements IIterator {
    public index: number;
    public elements: any[];

    constructor(el: Array<any>) {
        this.index = 0;
        this.elements = el;
    }

    public next(): object {
        return this.elements[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.elements.length;
    }
}
