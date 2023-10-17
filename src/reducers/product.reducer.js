import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  UPDATA_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/product.action";

const initialState = [];

/**
 * Reduces the state based on the given action.
 *
 * @param {object} state - The current state of the product.
 * @param {object} action - The action to be performed on the state.
 * @return {object} The updated state after the action is applied.
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case GET_PRODUCTS:
      return action.payload;

    case UPDATA_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        } else {
          return product;
        }
      });

    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
}
