import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/interfaces/product.interface';
import { TolerableUpperLimits } from '../../models/interfaces/tul.interface';

export interface ProductsState {
    products: Product[];
    tolerableUpperLimits: TolerableUpperLimits[];
}

const initialState: ProductsState = {
    products: [],
    tolerableUpperLimits: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<{ products: Product[] }>): void {
            state.products = action.payload.products;
        },
        setTolerableUpperLimits(state, action: PayloadAction<{ tolerableUpperLimits: TolerableUpperLimits[] }>): void {
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
