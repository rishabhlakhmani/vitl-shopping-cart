import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Product } from "../../../models/interfaces/product.interface";
import { NutrientsAmount } from "../../../models/interfaces/tul.type";
import { basketSelectors } from "../../../store/basket/basket.selector";
import { basketActions } from "../../../store/basket/basket.slice";
import { productsActions } from "../../../store/products/products.slice";
import { productsHooks } from "../../products/hooks/products.hooks";
import { basketUtils } from "../utils/basket.utils";

const useGetNutrientsInBasket = (): NutrientsAmount => useSelector(basketSelectors.getNutrientsInBasket);

const useGetBasketProducts = (): Product[] => useSelector(basketSelectors.getBasketProducts);

const useAddToBasket = (): ((product: Product) => void) => {
    const dispatch = useDispatch();
    const tolerableUpperLimits = productsHooks.useGetTolerableUpperLimits();
    const nutrientInBasket = useGetNutrientsInBasket();

    return useCallback(
        (product: Product) => {
            const nutrientsToBeAddedInBasket = basketUtils.getNutrientsToBeAddedInBasket(nutrientInBasket, product);
            const isEligibleToAddInBasket = basketUtils.isEligibleToAddInBasket(tolerableUpperLimits, nutrientsToBeAddedInBasket);
            if (isEligibleToAddInBasket) {
                dispatch(basketActions.addToBasket({ product }));
                dispatch(basketActions.updateNutrientsInBasket({ nutrientsToBeUpdatedInBasket: nutrientsToBeAddedInBasket }));
                dispatch(productsActions.removeFromProducts({ name: product.name }))
            } else {
                toast.error('You are trying to exceed Tolerable Upper Limit !! Please remove some products from cart and then try again!!', {
                    position: "top-right",
                });
            }
        },
        [dispatch, tolerableUpperLimits, nutrientInBasket],
    );
};

const useRemoveFromBasket = (): ((product: Product) => void) => {
    const dispatch = useDispatch();
    const nutrientInBasket = useGetNutrientsInBasket();

    return useCallback(
        (product: Product) => {
            const nutrientsToBeRemovedFromBasket = basketUtils.getNutrientsToBeRemovedFromBasket(nutrientInBasket, product);
            dispatch(basketActions.removeFromBasket({ name: product.name }))
            dispatch(basketActions.updateNutrientsInBasket({ nutrientsToBeUpdatedInBasket: nutrientsToBeRemovedFromBasket }));
            dispatch(productsActions.addToProducts({ product }))
        },
        [dispatch, nutrientInBasket],
    );
};

export const basketHooks = {
    useGetBasketProducts,
    useGetNutrientsInBasket,
    useAddToBasket,
    useRemoveFromBasket,
}