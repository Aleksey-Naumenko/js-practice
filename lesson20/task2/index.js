export class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.numberOfWheels = wheels;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}

export class Ship extends Vehicle {
    constructor(name, maxSpeed) {
        super(name, false);
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}
