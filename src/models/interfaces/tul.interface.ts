import { Nutrient } from "./nutrient.interface";

export interface TolerableUpperLimit extends Nutrient {
    unit: String;
}