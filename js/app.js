var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(value) {
        var _this = this;
        this.value = value;
        this.getImageUrl = function () {
            return "img/" + _this.getImageName();
        };
    }
    return Coin;
}());
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        _super.call(this, 0.10);
    }
    Dime.prototype.getImageName = function () {
        return "Dime.png";
    };
    return Dime;
}(Coin));
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.call(this, 0.25);
    }
    Quarter.prototype.getImageName = function () {
        return "Quarter.png";
    };
    return Quarter;
}(Coin));
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        _super.call(this, 0.50);
    }
    Half.prototype.getImageName = function () {
        return "Half.png";
    };
    return Half;
}(Coin));
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        _super.call(this, 1);
    }
    Dollar.prototype.getImageName = function () {
        return "Dollar.jpg";
    };
    return Dollar;
}(Coin));
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "img/SodaCan.png";
    };
    return SodaCategory;
}());
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="product.ts" />
var ProductFactory = (function () {
    function ProductFactory() {
    }
    ProductFactory.getProduct = function () {
        return new CocaCola();
    };
    return ProductFactory;
}());
/// <reference path="coin.ts"/>
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.cells = ko.observableArray([]);
        this.validCoins = [new Dime(), new Quarter(), new Half(), new Dollar()];
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
                var product = ProductFactory.getProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.isSold = ko.observable(false);
    }
    return Cell;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="productFactory.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map