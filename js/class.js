"use strict";
class Phone {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getTotalCost(discount) {
        const getTotalCost = this.price - discount;
        const total = getTotalCost;
        return total;
    }
}
// const iPhone = new Phone('apple', '12000');
const iPhone = new Phone('apple', 12000);
// iPhone.getTotalCost('5000');
iPhone.getTotalCost(5000);
