
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
    selectedCell = ko.observable(new Cell(new CocaCola()));
    canPay       = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    cells        = ko.observableArray([]);

    validCoins   = [new Quarter()];

    set size(machineSize: VendingMachineSize) {
        this.cells([]); // Clear the cells collection.

        for(let index = 0; index < machineSize; index++) {
             let product = ProductFactory.getProduct();
             this.cells.push(new Cell(product));   
        }
    }
}

class Cell {
    constructor(public product: CocaCola) {}

    stock   = ko.observable(3);
    isSold  = ko.observable(false);     
}