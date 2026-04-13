var PolyGenerator = /** @class */ (function () {
    function PolyGenerator() {
        var _this = this;
        this.currStateNumber = 1;
        this.STATES = ["", "Created", "Running", "Suspended", "Completed"];
        this.currentState = "Created";
        this.createGenerator = function (steps) {
        };
        this.next = function () {
            if (_this.currentState === "Running") {
                throw new Error("You can't call .next white generator is running...!!!");
            }
            if (_this.currentState === "Completed") {
                return { value: undefined, done: true };
            }
            _this.currStateNumber++;
            _this.currentState = _this.STATES[_this.currStateNumber];
            return {};
        };
    }
    PolyGenerator.prototype.return = function (v) {
        this.currentState = "Completed";
        return {
            value: v,
            done: true
        };
    };
    PolyGenerator.prototype.throw = function (err) {
        this.currentState = "Completed";
        throw new Error(err);
    };
    return PolyGenerator;
}());
var gen = new PolyGenerator();
gen.next();
console.log("Current State of GEN :", gen.currentState);
console.log(gen.return(42));
console.log("Current State of GEN :", gen.currentState);
