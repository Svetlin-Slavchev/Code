var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Auto = (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var CarClass = (function (_super) {
    __extends(CarClass, _super);
    function CarClass(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return CarClass;
}(Auto));
// Note:
// super() caling base contructor 
//# sourceMappingURL=extends.js.map