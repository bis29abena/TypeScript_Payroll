export default class Invoice {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format = () => {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    };
}
