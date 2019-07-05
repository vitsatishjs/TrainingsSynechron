// namespace dev1 {
//     interface IPoint {
//         getDistance(): number;
//     }

//     class Point implements IPoint {
//         constructor(public x: number, public y: number) { }
//         getDistance() {
//             return Math.sqrt(this.x * this.x + this.y * this.y);
//         }
//     }

//     let point: IPoint = new Point(2, 3);
//     console.log(point.getDistance());
// }

namespace dev1 {
    export interface IPoint {
        getDistance(): number;
    }

    export class Point implements IPoint {
        constructor(public x: number, public y: number) { }
        getDistance() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

namespace usage {
    let point: dev1.IPoint = new dev1.Point(2, 3);
    console.log(point.getDistance());
}