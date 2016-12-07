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
var ProductCategory = (function () {
    function ProductCategory(name) {
        var _this = this;
        this.name = name;
        this.getCategoryImage = function () {
            return "img/" + _this.getCategoryImageName();
        };
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        _super.call(this, "Soda");
    }
    SodaCategory.prototype.getCategoryImageName = function () {
        return "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var NutsCategory = (function (_super) {
    __extends(NutsCategory, _super);
    function NutsCategory() {
        _super.call(this, "Nuts");
    }
    NutsCategory.prototype.getCategoryImageName = function () {
        return "Nuts.png";
    };
    return NutsCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        _super.call(this, "Chips");
    }
    ChipsCategory.prototype.getCategoryImageName = function () {
        return "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.call(this, "Candy");
    }
    CandyCategory.prototype.getCategoryImageName = function () {
        return "Candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.call(this, "CandyBar");
    }
    CandyBarCategory.prototype.getCategoryImageName = function () {
        return "CandyBar.png";
    };
    return CandyBarCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0.0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Fanta = (function () {
    function Fanta() {
        this.name = "Fanta";
        this.price = 2;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = "Sprite";
        this.price = 1.80;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = "Peanuts";
        this.price = 1.50;
        this.category = new NutsCategory();
    }
    return Peanuts;
}());
var Cashews = (function () {
    function Cashews() {
        this.name = "Cashews";
        this.price = 2.80;
        this.category = new NutsCategory();
    }
    return Cashews;
}());
var Plain = (function () {
    function Plain() {
        this.name = "Plain";
        this.price = 2;
        this.category = new ChipsCategory();
    }
    return Plain;
}());
var Cheddar = (function () {
    function Cheddar() {
        this.name = "Cheddar";
        this.price = 2;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Mints = (function () {
    function Mints() {
        this.name = "Mints";
        this.price = 1.30;
        this.category = new CandyCategory();
    }
    return Mints;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = "Hersey's";
        this.price = 1.30;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var MilkyWay = (function () {
    function MilkyWay() {
        this.name = "Milky Way";
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return MilkyWay;
}());
/// <reference path="product.ts" />
var ProductFactory = (function () {
    function ProductFactory() {
    }
    ProductFactory.getProduct = function () {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Mints();
            case 8: return new Gummies();
            case 9: return new Hersey();
            case 10: return new MilkyWay();
        }
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
        this.selectedCell = ko.observable(new Cell(new Initial()));
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