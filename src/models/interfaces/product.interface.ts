import { Nutrient } from "./nutrient.interface";

export interface Product {
    name: string;
    price: number;
    nutrients: Nutrient[];
}
