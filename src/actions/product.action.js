import axios from "axios";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const UPDATA_PRODUCT = "UPDATA_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (data) => {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:5000/products", data)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: response.data,
        });
      });
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/products")
      .then((response) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data,
        });
      });
  };
};

export const updataProduct = (data) => {
  return async (dispatch) => {
    return await axios
      .put(`http://localhost:5000/products/${data.id}`, data)
      .then((response) => {
        dispatch({
          type: UPDATA_PRODUCT,
          payload: response.data,
        });
      });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    return await axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id,
        });
      });
  };
};
