

// const mapTolerableUpperLimits = (limits: Nutrient[]): NutrientsAmount => {
//     return Object.fromEntries(limits.map(item => [item.id, item.amount])) as NutrientsAmount
// }
import assigninwith from 'lodash.assigninwith';
import { Nutrients } from '../../../models/enums/nutrients.enum';
import { Nutrient } from '../../../models/interfaces/nutrient.interface';


import { Product } from "../../../models/interfaces/product.interface"
import { NutrientsAmount } from "../../../models/interfaces/tul.type"
import { productUtils } from "../../products/utils/products.utils"

const addAmount = (nutrientAmountInProduct: number, nutrientAmountInBasket: number) => {
    return nutrientAmountInProduct + nutrientAmountInBasket
}

const subtractAmount = (nutrientAmountInProduct: number, nutrientAmountInBasket: number) => {
    return nutrientAmountInProduct - nutrientAmountInBasket
}

const getNutrientsToBeAddedInBasket = (nutrientInBasket: NutrientsAmount, product: Product) => {

    const nutrientInProduct = productUtils.mapToNutrientsAmount(product.nutrients);
    return assigninwith({ ...nutrientInBasket }, nutrientInProduct, addAmount) as NutrientsAmount
}

const getNutrientsToBeRemovedFromBasket = (nutrientInBasket: NutrientsAmount, product: Product) => {

    const nutrientInProduct = productUtils.mapToNutrientsAmount(product.nutrients);
    return assigninwith({ ...nutrientInBasket }, nutrientInProduct, subtractAmount) as NutrientsAmount
}

const isEligibleToAddInBasket = (
    tolerableUpperLimits: NutrientsAmount,
    nutrientsToBeAddedInBasket: NutrientsAmount
): boolean => {

    for (const nutrient in nutrientsToBeAddedInBasket) {
        if (nutrientsToBeAddedInBasket[nutrient as Nutrients] > tolerableUpperLimits[nutrient as Nutrients])
            return false;
    }
    return true;
}

export const basketUtils = {
    isEligibleToAddInBasket,
    getNutrientsToBeAddedInBasket,
    getNutrientsToBeRemovedFromBasket
}