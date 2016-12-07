define(["require", "exports", "./coin", "./product", "./productFactory"], function (require, exports, coins, products, productFactory_1) {
    "use strict";
    var VendingMachine = (function () {
        function VendingMachine() {
            var _this = this;
            this.paid = ko.observable(0);
            this.selectedCell = ko.observable(new Cell(new products.Initial()));
            this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
            this.cells = ko.observableArray([]);
            this.validCoins = [new coins.Dime(), new coins.Quarter(), new coins.Half(), new coins.Dollar()];
            this.cellClicked = function (clickedCell) {
                clickedCell.isSold(false);
                _this.selectedCell(clickedCell);
            };
            this.coinInserted = function (insertedCoin) {
                var existingMoney = _this.paid();
                _this.paid(existingMoney + insertedCoin.value);
            };
            this.pay = function () {
                if (_this.selectedCell().stock() === 0) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                var existingMoney = _this.paid();
                var currentStock = _this.selectedCell().stock();
                _this.paid(Math.round(((existingMoney - _this.selectedCell().product.price) * 100)) / 100);
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().isSold(true);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (machineSize) {
                this.cells([]); // Clear the cells collection.
                for (var index = 0; index < machineSize; index++) {
                    var cellProduct = productFactory_1.default();
                    var newCell = new Cell(cellProduct);
                    this.cells.push(newCell);
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
    var Cell = (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.isSold = ko.observable(false);
        }
        return Cell;
    }());
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize || (VendingMachineSize = {}));
    exports.VendingMachineSize = VendingMachineSize;
});
//# sourceMappingURL=vendingMachine.js.map