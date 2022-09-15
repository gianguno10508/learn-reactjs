import { PRODUCTS } from "../const/action-types";

const Products = (state = [], action) => {
    if (action.type === PRODUCTS) {
        state = action.data;
    }
    
    return state;
};

export default Products;
