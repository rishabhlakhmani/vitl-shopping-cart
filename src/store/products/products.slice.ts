import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nutrients } from '../../models/enums/nutrients.enum';
import { Product } from '../../models/interfaces/product.interface';
import { NutrientsAmount } from '../../models/interfaces/tul.type';

export interface ProductsState {
    products: Product[];
    tolerableUpperLimits: NutrientsAmount;
}

const initialState: ProductsState = {
    products: [],
    tolerableUpperLimits: {
        [Nutrients.VitaminA] : 0,
        [Nutrients.VitaminC] : 0,
        [Nutrients.VitaminD] : 0,
        [Nutrients.VitaminE] : 0,
        [Nutrients.Zinc] : 0,
    }
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<{ products: Product[] }>): void {
            state.products = action.payload.products;
        },
        setTolerableUpperLimits(state, action: PayloadAction<{ tolerableUpperLimits: NutrientsAmount }>): void {
            state.tolerableUpperLimits = action.payload.tolerableUpperLimits;
        },
        addToProducts(state, action: PayloadAction<{ product: Product }>): void {
            state.products = [...state.products, action.payload.product];
        },
        removeFromProducts(state, action: PayloadAction<{ name: string }>): void {
            state.products = [...state.products.filter(product => product.name !== action.payload.name)];
        },
    },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
