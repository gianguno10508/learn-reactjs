import { GET_POST } from "../const/action-types";

const Posts = (state = [], action) => {
  if (action.type === GET_POST) {
    state = action.data;
  }

  return state;
};

export default Posts;
