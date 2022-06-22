import { Dispatch } from "redux";

import { Country } from "../../types";
import { FetchCountriesRequest, FetchCountriesSuccess, FetchCountriesFailure, SearchCountriesResult, AddFavouriteCountries, RemoveFavouriteCountries, SortBy } from "./actiontypes"

export const fetchCountries = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesRequest());
      const response: Country[] = await fetch("https://restcountries.com/v3.1/all").then(
        (response) => response.json()
      );
    dispatch(fetchCountriesSuccess(response))
    } catch (error) {
      dispatch(fetchCountriesFailure(error));
    }
  };
};
export const fetchCountriesRequest = (): FetchCountriesRequest=>{
  return{
    type: "FETCH_COUNTRIES_REQUEST",
}
}
export const fetchCountriesSuccess =(response: Country[]): FetchCountriesSuccess=>{
  return{
    type: "FETCH_COUNTRIES_SUCCESS", 
    payload: {response }
  }
}
export const fetchCountriesFailure =(error: any): FetchCountriesFailure=>{
  return{
    type: "FETCH_COUNTRIES_FAILURE", 
    payload: error 
  }
}


export const searchCountriesResult = (success: string): SearchCountriesResult => {
  return {
    type: "SEARCH_COUNTRIES_SUCCESS",
    payload: {success}
  };
};

export const addFavouriteCountries = (favCountry: Country): AddFavouriteCountries => {
  return {
    type: "ADD_FAV_COUNTRIES",
    payload: { favCountry }
  };
};

export const removeFavouriteCountries = (favCountry: Country): RemoveFavouriteCountries => {
  return {
    type: "REMOVE_FAV_COUNTRIES",
    payload: { favCountry }
  };
};

export const sortBy = (label: any): SortBy => {
  return {
    type: "SORT_BY",
    payload: {label}
  };
};
