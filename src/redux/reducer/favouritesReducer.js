const initialState = {
  favouritesCart: [],
};
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV_COUNTRIES":
      console.log(state, " This is state from reducer");
      const newFavCountry = [...state.favouritesCart, action.payload];
      console.log(newFavCountry, "FAV COUNTRY");
      console.log(action.payload, "ACTION PAYLOAD");
      return {
        ...state,
        favouritesCart: newFavCountry,
      };
    case "REMOVE_FAV_COUNTRIES": {
      const favCountry = action.payload;
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
