import  { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE,SEARCH_COUNTRIES_SUCCESS,ADD_FAV_COUNTRIES,REMOVE_FAV_COUNTRIES,SORT_BY, FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE} from "./constants"
import { Country } from "../../types";

export type ActionTypes =  FetchCountriesRequest | FetchCountriesSuccess | FetchCountriesFailure | SearchCountriesResult | AddFavouriteCountries | RemoveFavouriteCountries | SortBy | FetchCountryRequest | FetchCountrySuccess | FetchCountryFailure

export type FetchCountriesRequest = {
  type: typeof FETCH_COUNTRIES_REQUEST
}

export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: {
    response: Country[],
  }}

  export type FetchCountriesFailure ={
    type: typeof FETCH_COUNTRIES_FAILURE
    payload: {
      error: any
    }
  }

  export type SearchCountriesResult = {
    type: typeof SEARCH_COUNTRIES_SUCCESS
    payload: {
      success: string
    }
  }

  export type AddFavouriteCountries = {
    type : typeof ADD_FAV_COUNTRIES
    payload: {
      favCountry: Country
    }
  }

  export type RemoveFavouriteCountries = {
    type: typeof REMOVE_FAV_COUNTRIES   
    payload: {
      favCountry: Country
  }
  }
  export type SortBy = {
    type: typeof SORT_BY
    payload: {
      label: string
    }
  }

  export type FetchCountryRequest = {
    type: typeof FETCH_COUNTRY_REQUEST
  }

  export type FetchCountrySuccess = {
    type: typeof FETCH_COUNTRY_SUCCESS
    payload: {
      response : Country[]
    }
  }

  export type FetchCountryFailure = {
    type: typeof FETCH_COUNTRY_FAILURE
    payload: {
      error: any
    }
  }