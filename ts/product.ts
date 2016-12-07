import * as categories from "./productCategory";

export { IProduct, Initial, CocaCola, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints, Gummies, Hersey, MilkyWay }

interface IProduct {
    name:      string;
    price:     number;
    category?: categories.ProductCategory;
}

class Initial implements IProduct {
    name  = "Please select a product";
    price = 0.0;
}

class CocaCola implements IProduct {
    name     = "Coca Cola";
    price    = 2.30;
    category = new categories.SodaCategory();    
}

class Fanta implements IProduct {
    name     = "Fanta"
    price    = 2
    category = new categories.SodaCategory()
}

class Sprite implements IProduct {
    name     = "Sprite"
    price    = 1.80
    category = new categories.SodaCategory()
}

class Peanuts implements IProduct {
    name     = "Peanuts"
    price    = 1.50
    category = new categories.NutsCategory()
}

class Cashews implements IProduct {
    name     = "Cashews"
    price    = 2.80
    category = new categories.NutsCategory()
}

class Plain implements IProduct {
    name     = "Plain"
    price    = 2
    category = new categories.PotatoChipsCategory();
}

class Cheddar implements IProduct {
    name     = "Cheddar"
    price    = 2
    category = new categories.PotatoChipsCategory();
}

class Mints implements IProduct {
    name     = "Mints"
    price    = 1.30
    category = new categories.CandyCategory()
}

class Gummies implements IProduct {
    name     = "Gummies"
    price    = 1.90
    category = new categories.CandyCategory()
}

class Hersey implements IProduct {
    name     = "Hersey's"
    price    = 1.30
    category = new categories.CandyBarCategory()
}

class MilkyWay implements IProduct {
    name     = "Milky Way"
    price    = 1.80
    category = new categories.CandyBarCategory()
}