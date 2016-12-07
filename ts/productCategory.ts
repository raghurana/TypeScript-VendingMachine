
abstract class ProductCategory {
    constructor(public name: string) {}

    getCategoryImage = () => {
        return "img/" + this.getCategoryImageName();
    }

    protected abstract getCategoryImageName(): string;
}

class SodaCategory extends ProductCategory {
    constructor() {
        super("Soda");
    }

    protected getCategoryImageName() {
        return "SodaCan.png";
    }
}

class NutsCategory extends ProductCategory {
    constructor() {
        super("Nuts");
    }

    protected getCategoryImageName() {
        return "Nuts.png";
    }
}

class ChipsCategory extends ProductCategory {
    constructor() {
        super("Chips");
    }

    protected getCategoryImageName() {
        return "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    constructor() {
        super("Candy");
    }

    protected getCategoryImageName() {
        return "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory {
    constructor() {
        super("CandyBar");
    }

    protected getCategoryImageName() {
        return "CandyBar.png";
    }
}