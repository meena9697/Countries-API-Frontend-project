export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_COUNTRIES_REQUEST" });
      const response = await fetch("https://restcountries.com/v3.1/all").then(
        (response) => response.json()
      );
      console.log(response, "RESPONSE FROM THUNK");
      dispatch({ type: "FETCH_COUNTRIES_SUCCESS", payload: response });
    } catch (error) {
      console.log(error, "Error");
      dispatch({ type: "FETCH_COUNTRIES_FAILURE", payload: error });
    }
  };
};

export const SearchCountriesResult = (success) => {
  return {
    type: "SEARCH_COUNTRIES_SUCCESS",
    payload: success,
  };
};

export const AddFavouriteCountries = (favCountry) => {
  console.log(favCountry, " This is favourite country");
  return {
    type: "ADD_FAV_COUNTRIES",
    payload: favCountry,
  };
};

export const RemoveFavouriteCountries = (favCountry) => {
  return {
    type: "REMOVE_FAV_COUNTRIES",
    payload: favCountry,
  };
};

export const SortByRegion = () => {
  return {
    type: "SORT_BY_REGION",
  };
};
export const SortByName = () => {
  return {
    type: "SORT_BY_NAME"
  };
};
export const SortByPopulation = () => {
  return {
    type: "SORT_BY_POP",
  };
};
