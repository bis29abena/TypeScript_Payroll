import IHasFormatter from "../Interfaces/IHasFormatter";

export default class Order implements IHasFormatter{
    constructor(
        readonly customer: string,
        private details: string,
        public amount: number
    ){}

    format = () => {
        return `${this.customer} bought ${this.amount} cedis for ${this.details}`
    };
}