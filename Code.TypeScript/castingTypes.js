/// <reference path="index.d.ts" />
// Ambient jQuery use
var Calculator2 = (function () {
    function Calculator2(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.ouput = $('#' + outputId);
    }
    return Calculator2;
}());
// Normal class casting
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.ouput = document.getElementById(outputId);
    }
    return Calculator;
}());
//# sourceMappingURL=castingTypes.js.map