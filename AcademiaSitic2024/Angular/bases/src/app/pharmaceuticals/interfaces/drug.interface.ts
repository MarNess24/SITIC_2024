import { EPharmaType } from "./enum.interface";

export interface Drug {
    name: string;
    price: number;
    type: EPharmaType;
}