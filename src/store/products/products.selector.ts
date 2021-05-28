import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

import { ProductsState } from './products.slice';

const getProductsState = (state: RootState): ProductsState => state.products;

const getProducts = createSelector(getProductsState, (state) => state.products);
const getTolerableUpperLimits = createSelector(getProductsState, (state) => state.tolerableUpperLimits);

export const productsSelectors = {
    getProducts,
    getTolerableUpperLimits
};
