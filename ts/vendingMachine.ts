
/// <reference path="coin.ts"/>
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />


enum VendingMachineSize {
    small  = 6,
    medium = 9, 
    large  = 12
}


class VendingMachine {
    
    paid         = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Initial()));
    canPay       = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    cells        = ko.observableArray([]);

    validCoins: Coin[] = [new Dime(), new Quarter(), new Half(), new Dollar()];

    set size(machineSize: VendingMachineSize) {
        this.cells([]); // Clear the cells collection.

        for(let index = 0; index < machineSize; index++) {
             let product = ProductFactory.getProduct();
             this.cells.push(new Cell(product));   
        }
    }

    cellClicked = (clickedCell: Cell): void => {
        clickedCell.isSold(false);
        this.selectedCell(clickedCell);
    }

    coinInserted = (insertedCoin: Quarter): void => {
        let existingMoney = this.paid();
        this.paid( existingMoney + insertedCoin.value );
    }

    pay = ():void => {
          if (this.selectedCell().stock() === 0) {
            alert("I'm sorry, we're out of them!")
            return;
        }
        
        let existingMoney = this.paid();
        let currentStock  = this.selectedCell().stock();

        this.paid(Math.round(((existingMoney - this.selectedCell().product.price) * 100))/100);

        this.selectedCell().stock(currentStock-1);
        this.selectedCell().isSold(true);
    }
}

class Cell {
    constructor(public product: IProduct) {}

    stock   = ko.observable(3);
    isSold  = ko.observable(false);     
}