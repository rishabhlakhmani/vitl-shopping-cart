import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';

import productsReducer from './products/products.slice';
import basketReducer from './basket/basket.slice';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;
