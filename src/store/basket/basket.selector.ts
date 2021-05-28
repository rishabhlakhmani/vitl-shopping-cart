import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { basketState } from './basket.slice';

const getBasketProductsState = (state: RootState): basketState => state.basket;

const getBasketProducts = createSelector(getBasketProductsState, (state) => state.productsInBasket);
const getNutrientsInBasket = createSelector(getBasketProductsState, (state) => state.nutrientInBasket);
const getTotalPrice = createSelector(getBasketProductsState, (state) => state.totalPrice);

export const basketSelectors = {
    getBasketProducts,
    getNutrientsInBasket,
    getTotalPrice
};
