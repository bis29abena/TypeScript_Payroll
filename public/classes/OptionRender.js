export class OptionRender {
    container;
    constructor(container) {
        this.container = container;
    }
    renderOptions = (header) => {
        header.forEach((element, index) => {
            const option = document.createElement("option");
            option.value = element;
            option.text = element;
            this.container.add(option);
        });
    };
}
