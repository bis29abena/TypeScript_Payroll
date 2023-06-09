import IHasFormatter from "../Interfaces/IHasFormatter";

export default class Payment implements IHasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format = () => {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    };
}