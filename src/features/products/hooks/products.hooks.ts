import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../models/interfaces/product.interface";
import { NutrientsAmount } from "../../../models/interfaces/tul.type";
import { productsSelectors } from "../../../store/products/products.selector";
import { productsActions } from "../../../store/products/products.slice";

const useGetProducts = (): Product[] => useSelector(productsSelectors.getProducts);

const useSetProducts = (): ((products: Product[]) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        (value: Product[]) =>
            dispatch(productsActions.setProducts({ products: value })),
        [dispatch],
    );
};

const useGetTolerableUpperLimits = (): NutrientsAmount => useSelector(productsSelectors.getTolerableUpperLimits);

const useSetTolerableUpperLimits = (): ((tuls: NutrientsAmount) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        (value: NutrientsAmount) =>
            dispatch(productsActions.setTolerableUpperLimits({ tolerableUpperLimits: value })),
        [dispatch],
    );
};

export const productsHooks = {
    useGetProducts,
    useSetProducts,
    useGetTolerableUpperLimits,
    useSetTolerableUpperLimits
}