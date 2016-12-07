
import * as coins    from "./coin";
import * as products from "./product";
import createProduct from "./productFactory";

export { VendingMachine, VendingMachineSize }

class VendingMachine {
    
    paid         = ko.observable(0);
    selectedCell = ko.observable(new Cell(new products.Initial()));
    canPay       = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    cells        = ko.observableArray([]);

    validCoins: coins.Coin[] = [new coins.Dime(), new coins.Quarter(), new coins.Half(), new coins.Dollar()];

    set size(machineSize: VendingMachineSize) {
        this.cells([]); // Clear the cells collection.

        for(let index = 0; index < machineSize; index++) {
             let cellProduct = createProduct();
             let newCell     = new Cell(cellProduct);

             this.cells.push(newCell);   
        }
    }

    cellClicked = (clickedCell: Cell): void => {
        clickedCell.isSold(false);
        this.selectedCell(clickedCell);
    }

    coinInserted = (insertedCoin: coins.Coin): void => {
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
    constructor(public product: products.IProduct) {}

    stock   = ko.observable(3);
    isSold  = ko.observable(false);     
}

enum VendingMachineSize {
    small  = 6,
    medium = 9, 
    large  = 12
}