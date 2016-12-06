var VendingMachine = (function () {
    function VendingMachine() {
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
console.log(ko);
var Quarter = (function () {
    function Quarter() {
        this.value = 0.25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
//# sourceMappingURL=app.js.map