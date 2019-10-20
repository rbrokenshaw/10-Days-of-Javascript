class Polygon {
    constructor(arr) {
        this.lengths = arr;
    }

    perimeter(lengths) {
        var total = 0;
        for (var i=0; i < this.lengths.length; i++) {
            total = total + this.lengths[i];
        }
        return total;
    }
}