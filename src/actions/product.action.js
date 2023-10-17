import axios from "axios";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const UPDATA_PRODUCT = "UPDATA_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

/**
 * Adds a product to the server.
 *
 * @param {object} data - The data of the product to be added.
 * @returns {Promise} A promise that resolves with the response data.
 */
export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/products", data);

      dispatch({
        type: ADD_PRODUCT,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      throw new Error("Failed to add product.");
    }
  };
};

/**
 * Fetches the products from the server and dispatches a redux action with the response.
 *
 * @param {function} dispatch - The dispatch function provided by the redux store.
 * @return {Promise} A promise that resolves when the products are successfully fetched and the redux action is dispatched.
 */
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la récupération des données.",
        error
      );
    }
  };
};

/**
 * Updates a product.
 *
 * @param {Object} data - The data of the product to be updated.
 * @return {Promise} A promise that resolves to the updated product.
 */
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

/**
 * Deletes a product with the specified `id`.
 *
 * @param {number} id - The id of the product to delete.
 * @return {Promise} A promise that resolves when the product is successfully deleted.
 */
export const deleteProduct = (id) => {
  return async (dispatch) => {
    return await axios
      .delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id,
        });
      });
  };
};
