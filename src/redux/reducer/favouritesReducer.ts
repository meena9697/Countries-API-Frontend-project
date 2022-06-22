import { ActionTypes } from "../action/actiontypes"
import { FavouritesDataInitialState } from "../../types";

const initialState: FavouritesDataInitialState = {
  favouritesCart: [],
};

const favouritesReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD_FAV_COUNTRIES":
      const newFavCountry = [...state.favouritesCart, action.payload];
      return {
        ...state,
        favouritesCart: newFavCountry,
      };
    case "REMOVE_FAV_COUNTRIES": {
      const favCountry = action.payload.favCountry;
      const favouritesCart = state.favouritesCart.filter(
        (item) => item.name.common !== favCountry.name.common
      );
      return {
        ...state,
        favouritesCart,
      };
    }
    default:
      return state;
  }
};
export default favouritesReducer;
