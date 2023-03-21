import { IOptionRender } from "../Interfaces/IOptionRender";

export class OptionRender implements IOptionRender {
    constructor(private container: HTMLSelectElement) { }

    renderOptions = (header: string[]) => {
        header.forEach((element, index) => {
            const option = document.createElement("option")
            option.value = element
            option.text = element
            this.container.add(option)
        }) 
    };
}