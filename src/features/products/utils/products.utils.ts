
import { Nutrient } from "../../../models/interfaces/nutrient.interface"
import { NutrientsAmount } from "../../../models/interfaces/tul.type"

const mapToNutrientsAmount = (limits: Nutrient[]): NutrientsAmount => {
    return Object.fromEntries(limits.map(item => [item.id, item.amount])) as NutrientsAmount
}

export const productUtils = {
    mapToNutrientsAmount
}