import { CATEGORIES } from "../const/action-types";


const Categories = (state = [], action) => {
    if (action.type === CATEGORIES) {
        state = action.data;
    }
    
    return state;
};

export default Categories;
