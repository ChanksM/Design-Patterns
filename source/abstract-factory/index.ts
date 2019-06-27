import {
    battle, Droids,
} from "./interfaces";

function droidProducer(kind: battle): () => Droids {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

class B1 implements Droids {
    public info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements Droids {
    public info() {
        return "Rx24, Pilot Droid";
    }
}
