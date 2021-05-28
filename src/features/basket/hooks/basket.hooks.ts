import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../models/interfaces/product.interface";
import { basketSelectors } from "../../../store/basket/basket.selector";
import { basketActions } from "../../../store/basket/basket.slice";
import { productsActions } from "../../../store/products/products.slice";

const useGetBasketProducts = (): Product[] => useSelector(basketSelectors.getBasketProducts);

const useAddToBasket = (): ((product: Product) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        (product: Product) => {
            dispatch(basketActions.addToBasket({ product }));
            dispatch(productsActions.removeFromProducts({ name: product.name }))
        },
        [dispatch],
    );
};

const useRemoveFromBasket = (): ((product: Product) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        (product: Product) => {
            dispatch(basketActions.removeFromBasket({ name: product.name }))
            dispatch(productsActions.addToProducts({ product }))
        },
        [dispatch],
    );
};

export const basketHooks = {
    useGetBasketProducts,
    useAddToBasket,
    useRemoveFromBasket,
}