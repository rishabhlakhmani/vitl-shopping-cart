import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/interfaces/product.interface';

export interface basketState {
    productsInBasket: Product[];
}

const initialState: basketState = {
    productsInBasket: [],
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
    },
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
