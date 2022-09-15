import { GET_POST_SELECT } from "../const/action-types";

const SelectPost = (state = [], action) => {
  if (action.type === GET_POST_SELECT) {
    state = action.data;
  }

  return state;
};

export default SelectPost;
