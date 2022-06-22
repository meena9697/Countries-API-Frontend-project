import { Dispatch } from "redux";

import { Country } from "../../types"
import { FetchCountryRequest, FetchCountrySuccess, FetchCountryFailure} from "./actiontypes"

export const fetchCountryRequest = (): FetchCountryRequest => {
  return {
      type: "FETCH_COUNTRY_REQUEST",
  };
};

export const fetchCountrySuccess = (response: Country[]):FetchCountrySuccess  => {
  return {
      type: "FETCH_COUNTRY_SUCCESS",
      payload: { response },
  };
};

export const fetchCountryFailure = (error: any): FetchCountryFailure => {
  return {
      type: "FETCH_COUNTRY_FAILURE",
      payload: { error },
  };
};

export const fetchCountryData = (country_name: string) => {
  return async (dispatch: Dispatch) => {
      try {
          dispatch(fetchCountryRequest());
          const response = await fetch(
              `https://restcountries.com/v3.1/name/${country_name}`
          ).then((response) => response.json());
          dispatch(fetchCountrySuccess(response));
      } catch (error) {
          dispatch(fetchCountryFailure(error));
      }
  };
};