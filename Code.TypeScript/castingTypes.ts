/// <reference path="index.d.ts" />
// Ambient jQuery use
class Calculator2 {
    private x: JQuery;
    private y: JQuery;
    private ouput: JQuery;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.ouput = $('#' + outputId);
    }
}

// Normal class casting
class Calculator {
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private ouput: HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.ouput = <HTMLSpanElement>document.getElementById(outputId);
    }
}