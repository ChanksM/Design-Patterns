import { IRequest } from "./interface";

class TrafficTower {
    public airplanes: Airplane[];

    public requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane implements IRequest {

    constructor(public position: number, public trafficTower: TrafficTower) {
        this.trafficTower.airplanes.push(this);
    }

    public requestPositions(): number[] {
        return this.trafficTower.requestPositions();
    }
}
