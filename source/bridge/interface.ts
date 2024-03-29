import {Ink} from "./index";

export interface IPrinter {
    ink: Ink;
    print: () => string;
}

export interface IInk {
    type: string;
    get: () => string;
}
