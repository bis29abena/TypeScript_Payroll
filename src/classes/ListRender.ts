import IHasFormatter from "../Interfaces/IHasFormatter";
import { IListRender } from "../Interfaces/IListRender";

export default class ListRender implements IListRender {
    constructor(private container: HTMLUListElement){}

    renderList = (item: IHasFormatter, heading: string, position: "start" | "end") => {
        const li = document.createElement("li");

        const h4 = document.createElement("h4")

        h4.innerText = heading
        li.append(h4)

        const p = document.createElement("p")

        p.innerText = item.format()
        li.append(p)

        if(position === "start"){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
}