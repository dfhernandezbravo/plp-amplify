import { ProductModel } from "./productModel.types";

export type ProductCardProps = {
    product: ProductModel;
    onAddToCart: (product: ProductModel) => void;
}