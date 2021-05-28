import { Nutrients } from "../enums/nutrients.enum";

export interface Nutrient {
    id: Nutrients;
    amount: number;
}