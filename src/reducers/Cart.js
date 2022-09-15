import { GET_CART } from "../const/action-types";


const Cart = (state = [], action) => {
    if (action.type === GET_CART) {
        state = action.data;
    }
    
    return state;
};

export default Cart;
