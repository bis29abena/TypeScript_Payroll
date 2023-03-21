import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import IHasFormatter from "./Interfaces/IHasFormatter.js";
import ListRender from "./classes/ListRender.js";
import { Operations } from "./Enums/Operations.js";
import { OptionRender } from "./classes/OptionRender.js";
import Order from "./classes/Order.js";

const form = document.querySelector("form")!;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!

const list = new ListRender(ul)
const options = new OptionRender(type)

const keys = Object.values(Operations)
options.renderOptions(keys)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let doc: IHasFormatter;

    let userDetails: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];

    console.log(userDetails)
    console.log(type.value)

    if (type.value.toLowerCase() === "invoice") {
        doc = new Invoice(...userDetails)
    } else if (type.value.toLowerCase() === "payment") {
        doc = new Payment(...userDetails)
    } else {
        doc = new Order(...userDetails)
    }

    list.renderList(doc, type.value, "start")
})