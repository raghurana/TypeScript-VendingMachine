

abstract class Coin {
    constructor(public value: number) {}

    getImageUrl = () => { 
        return "img/" + this.getImageName(); 
    }

    protected abstract getImageName(): string;
}

class Dime extends Coin {
    constructor() {
        super(0.10)
    } 

    getImageName() {
        return "Dime.png";
    }
}

class Quarter extends Coin {
    constructor() {
        super(0.25)
    } 

    getImageName() {
        return "Quarter.png";
    }
}

class Half extends Coin {
    constructor() {
        super(0.50)
    } 

    getImageName() {
        return "Half.png";
    }
}

class Dollar extends Coin {
    constructor() {
        super(1)
    } 

    getImageName() {
        return "Dollar.jpg";
    }
}