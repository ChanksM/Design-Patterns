// interface SingleTonSchema {
//     instance: object;
// }

class Person {
    public static instance: Person;

    constructor() {
        // TODO: improve condition
        if (Person.instance == null) {
            Person.instance = this;
        }
        if (typeof Person.instance === "object") {
            return Person.instance;
        }

        Person.instance = this;
        return this;
    }
}
