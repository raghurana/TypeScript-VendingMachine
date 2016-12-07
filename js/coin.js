var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.Coin = Coin;
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
    exports.Dime = Dime;
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
    exports.Quarter = Quarter;
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
    exports.Half = Half;
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
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coin.js.map