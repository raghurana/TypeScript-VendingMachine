/// <reference path="productCategory.ts" />

interface IProduct {
    name:      string;
    price:     number;
    category?: ProductCategory;
}

class Initial implements IProduct {
    name  = "Please select a product";
    price = 0.0;
}

class CocaCola implements IProduct {
    name     = "Coca Cola";
    price    = 2.30;
    category = new SodaCategory();    
}

class Fanta implements IProduct {
    name     = "Fanta"
    price    = 2
    category = new SodaCategory()
}

class Sprite implements IProduct {
    name     = "Sprite"
    price    = 1.80
    category = new SodaCategory()
}

class Peanuts implements IProduct {
    name     = "Peanuts"
    price    = 1.50
    category = new NutsCategory()
}

class Cashews implements IProduct {
    name     = "Cashews"
    price    = 2.80
    category = new NutsCategory()
}

class Plain implements IProduct {
    name     = "Plain"
    price    = 2
    category = new ChipsCategory()
}

class Cheddar implements IProduct {
    name     = "Cheddar"
    price    = 2
    category = new ChipsCategory()
}

class Mints implements IProduct {
    name     = "Mints"
    price    = 1.30
    category = new CandyCategory()
}

class Gummies implements IProduct {
    name     = "Gummies"
    price    = 1.90
    category = new CandyCategory()
}

class Hersey implements IProduct {
    name     = "Hersey's"
    price    = 1.30
    category = new CandyBarCategory()
}

class MilkyWay implements IProduct {
    name     = "Milky Way"
    price    = 1.80
    category = new CandyBarCategory()
}