import {
    IEquipment,
} from "./interface";

class Equipment {
    public price: number;
    public name: string;
    public getPrice() {
        return this.price || 0;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}


class Composite extends Equipment {
    public equipments: IEquipment[];
    constructor() {
        super();
        this.equipments = [];
    }

    public add(equipment: IEquipment) {
        this.equipments.push(equipment);
    }

    public getPrice() {
        return this.equipments.map(equipment => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}

class Cabinet extends Composite {

    constructor() {
        super();
        this.setName("cabinet");
    }
}

class FloppyDisk extends Equipment {

    constructor() {
        super();
        this.setName("Floppy Disk");
        this.price = 70;
    }
}

class HardDrive extends Equipment {

    constructor() {
        super();
        this.setName("Hard Drive");
        this.price = 250;
    }
}

class Memory extends Equipment {

    constructor() {
        super();
        this.setName("Memory");
        this.price = 280;
    }
}
