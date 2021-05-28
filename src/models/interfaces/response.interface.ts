import { Product } from "./product.interface";
import { TolerableUpperLimit } from "./tul.interface";

export interface Response {
    products: Product[];
    config: {
        tolerableUpperLimits: TolerableUpperLimit[];
        currency: string
    }
}