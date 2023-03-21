import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
import ListRender from "./classes/ListRender.js";
import { Operations } from "./Enums/Operations.js";
import { OptionRender } from "./classes/OptionRender.js";
import Order from "./classes/Order.js";
const form = document.querySelector("form");
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListRender(ul);
const options = new OptionRender(type);
const keys = Object.values(Operations);
options.renderOptions(keys);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let userDetails = [toFrom.value, details.value, amount.valueAsNumber];
    console.log(userDetails);
    console.log(type.value);
    if (type.value.toLowerCase() === "invoice") {
        doc = new Invoice(...userDetails);
    }
    else if (type.value.toLowerCase() === "payment") {
        doc = new Payment(...userDetails);
    }
    else {
        doc = new Order(...userDetails);
    }
    list.renderList(doc, type.value, "start");
});
