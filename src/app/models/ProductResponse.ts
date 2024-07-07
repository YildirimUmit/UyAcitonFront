import {ProductUtil} from "./ProductUtil";
import {ProductCategory} from "./ProductCategory";

export class ProductResponse {
    productId: number;
    productName: string;
    productCreatedDate: number;
    productUpdatedDate: number;
    productUtils: ProductUtil[];
    productCategories: ProductCategory[];
}
