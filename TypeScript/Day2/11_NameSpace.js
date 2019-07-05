var dev1;
(function (dev1) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistance = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    dev1.Point = Point;
})(dev1 || (dev1 = {}));
var usage;
(function (usage) {
    var point = new dev1.Point(2, 3);
    console.log(point.getDistance());
})(usage || (usage = {}));
