import {
    EnhancedStore,
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';

import productsReducer from './products/products.slice';
import basketReducer from './basket/basket.slice';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
});
export type RootState = ReturnType<typeof rootReducer>;

// const rootEpic = combineEpics();

// const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: rootReducer,
    // middleware: [...getDefaultMiddleware(), epicMiddleware],
});


// epicMiddleware.run(rootEpic);

export default store;
