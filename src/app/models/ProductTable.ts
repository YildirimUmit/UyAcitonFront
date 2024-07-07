import {Size} from "./Size.enum";

export class ProductTable {
    productUtilId: number;
    productId: number;
    price: number;
    color?: string;
    size?: Size;
    quantity: number;
    image: string
    productName: string;
    productCreatedDate: number;
    productUpdatedDate: number;
    id: number;
    categoryId: number;
}
