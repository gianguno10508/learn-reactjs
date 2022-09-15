import {CATEGORIES, GET_ACCOUNT, GET_CART, GET_FOOD_CATEGORY, GET_FOOD_SEARCH, GET_POST, GET_POST_SELECT, PRODUCTS } from "../const/action-types";

export const actSelectCategory = (data) => {
  return {
    type: GET_FOOD_CATEGORY,
    data, 
  };
};
export const actSelectProduct = (data) => {
  return {
    type: GET_FOOD_SEARCH,
    data,
  };
};
export const actProducts = (data) => {
  return {
      type: PRODUCTS,
      data
  };
};
export const actCategories = (data) => {
  return {
      type: CATEGORIES,
      data
  };
};
export const actSelectPost = (data) => {
  return {
      type: GET_POST_SELECT,
      data
  };
};
export const actPost = (data) => {
  return {
      type: GET_POST,
      data
  };
};
export const actAccount = (data) => {
  return {
      type: GET_ACCOUNT,
      data
  };
};
export const actCart = (data) => {
  return {
      type: GET_CART,
      data
  };
};

