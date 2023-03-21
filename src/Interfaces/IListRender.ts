import IHasFormatter from "./IHasFormatter";

export interface IListRender{
    renderList: <T extends IHasFormatter>(item: T, heading: string, pos: "start" | "end") => any
}