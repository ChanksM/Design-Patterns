class Car {
    public drive() {
        return "driving";
    }
}

class CarProxy {
    constructor(public driver: Driver){}
    public drive(): string {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver {
    constructor(public age: number) {}
}
