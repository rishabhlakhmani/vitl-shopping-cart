import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../models/interfaces/product.interface";
import { TolerableUpperLimits } from "../../../models/interfaces/tul.interface";
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

const useGetTolerableUpperLimits = (): TolerableUpperLimits[] => useSelector(productsSelectors.getTolerableUpperLimits);

const useSetTolerableUpperLimits = (): ((products: TolerableUpperLimits[]) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        (value: TolerableUpperLimits[]) =>
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