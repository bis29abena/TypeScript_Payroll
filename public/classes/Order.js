export default class Order {
    customer;
    details;
    amount;
    constructor(customer, details, amount) {
        this.customer = customer;
        this.details = details;
        this.amount = amount;
    }
    format = () => {
        return `${this.customer} bought ${this.amount} cedis for ${this.details}`;
    };
}
