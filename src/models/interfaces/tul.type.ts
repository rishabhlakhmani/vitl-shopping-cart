import { Nutrients } from "../enums/nutrients.enum"

export type NutrientsAmount = {
    [key in Nutrients]: number;
};