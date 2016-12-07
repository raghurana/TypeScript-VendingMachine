var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.ProductCategory = ProductCategory;
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
    exports.SodaCategory = SodaCategory;
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
    exports.NutsCategory = NutsCategory;
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
    exports.PotatoChipsCategory = ChipsCategory;
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
    exports.CandyCategory = CandyCategory;
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
    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=productCategory.js.map