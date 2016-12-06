
/// <reference path="vendingMachine.ts" />
/// <reference path="productFactory.ts" />

var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);

