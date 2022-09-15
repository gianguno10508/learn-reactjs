import { combineReducers } from "redux";
import Account from "./Account";
import Cart from "./Cart";
import Categories from "./Categories";
import DishCategory from "./DishCategory";
import DishSearch from "./DishSearch";
import Posts from "./Posts";
import Products from "./Product";
import SelectPost from "./SelectPost";
const rootReducer = combineReducers({
    dish_cate: DishCategory,
    dish_search: DishSearch,
    product: Products,
    category: Categories,
    select_post: SelectPost,
    posts: Posts,
    account: Account,
    cart: Cart
  })
  
  
  export default rootReducer;
