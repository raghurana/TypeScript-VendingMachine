
/// <reference path="product.ts" />

class ProductFactory {

    static getProduct(): CocaCola {
        return new CocaCola();
    }

}
