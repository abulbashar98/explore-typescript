
class Phone {
    brand: string;
    price: number;
    constructor(brand: string, price: number) {
        this.brand = brand;
        this.price = price
    }
    getTotalCost(discount: number): number {
        const getTotalCost = this.price - discount;
        const total = getTotalCost;
        return total;
    }
}

// const iPhone = new Phone('apple', '12000');
const iPhone = new Phone('apple', 12000);
// iPhone.getTotalCost('5000');
iPhone.getTotalCost(5000);