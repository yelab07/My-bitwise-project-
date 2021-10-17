import { TypesOfActions } from "../Constants/Types-OfActions";
export const setProducts = (products) => {
    return {
        type: TypesOfActions.SET_PRODUCTS,
        payload:products,
    }
};
export const selectedProducts = (product) => {
    return {
        type: TypesOfActions.SELECTED_PRODUCTS,
        payload:product,
    }
}