export interface IEquipment {
    price: number;
    name: string;
    getPrice(): number;
    getName(): string;
    setName(name: string): void;
}
