import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nutrients } from '../../models/enums/nutrients.enum';
import { Product } from '../../models/interfaces/product.interface';
import { NutrientsAmount } from '../../models/interfaces/tul.type';

export interface basketState {
    productsInBasket: Product[];
    nutrientInBasket: NutrientsAmount;
    totalPrice: number;
}

const initialState: basketState = {
    productsInBasket: [],
    nutrientInBasket: {
        [Nutrients.VitaminA]: 0,
        [Nutrients.VitaminC]: 0,
        [Nutrients.VitaminD]: 0,
        [Nutrients.VitaminE]: 0,
        [Nutrients.Zinc]: 0,
    },
    totalPrice: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<{ product: Product }>): void {
            state.productsInBasket = [...state.productsInBasket, action.payload.product];
        },
        removeFromBasket(state, action: PayloadAction<{ name: string }>): void {
            state.productsInBasket = [...state.productsInBasket.filter(product => product.name !== action.payload.name)];
        },
        updateNutrientsInBasket(state, action: PayloadAction<{ nutrientsToBeUpdatedInBasket: NutrientsAmount }>): void {
            state.nutrientInBasket = { ...state.nutrientInBasket, ...action.payload.nutrientsToBeUpdatedInBasket }
        },
        updateTotalPrice(state): void {
            state.totalPrice = state.productsInBasket.reduce((sumTotal, product) => {
                return sumTotal + product.price;
              }, 0)
        }
    },
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
