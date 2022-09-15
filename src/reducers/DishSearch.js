import { GET_FOOD_SEARCH } from "../const/action-types";

const DishSearch = (state = [], action) => {
  if (action.type === GET_FOOD_SEARCH) {
    state = action.data;
  }

  return state;
};

export default DishSearch;
