import { GET_FOOD_CATEGORY } from "../const/action-types";

const DishCategory = (state = [], action) => {
  if (action.type === GET_FOOD_CATEGORY) {
    state = action.data;
  }

  return state;
};

export default DishCategory;
