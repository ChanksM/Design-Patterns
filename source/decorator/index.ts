import {IPasta} from "./interface";

abstract class Pasta implements IPasta {
    public price: number;

    constructor() {
        this.price = 0;
    }

    public getPrice() {
        return this.price;
    }
}

class Penne extends Pasta {

    constructor() {
        super();
        this.price
    }
}

class PastaDecorator extends Pasta {

    constructor(public pasta: IPasta) {
        super()
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {

    constructor(public pasta: IPasta) {
        super(pasta);
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta: IPasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}
