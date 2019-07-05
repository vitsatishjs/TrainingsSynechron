export interface IPoint {
    getDistance(): number;
}

export class Point implements IPoint {
    constructor(public x: number, public y: number) { }
    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}