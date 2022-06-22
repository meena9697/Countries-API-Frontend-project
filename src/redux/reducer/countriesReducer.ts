import { Label } from "@mui/icons-material";
import { Country } from "../../types";
import { ActionTypes } from "../action/actiontypes";

type InitialState = {
  countriesData: Country[];
  loading: boolean;
  SearchCountries: Country[];
  error: String;
};

const initialState: InitialState = {
  loading: false,
  countriesData: [],
  SearchCountries: [],
  error: "",
};

const countriesReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_COUNTRIES_SUCCESS":
      return {
        loading: false,
        countriesData: action.payload,
        SearchCountries: action.payload,
        error: "",
      };

    case "FETCH_COUNTRIES_FAILURE":
      return {
        loading: false,
        countriesData: [],
        error: action.payload,
      };

    case "SEARCH_COUNTRIES_SUCCESS":
      const result = state.countriesData.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(action.payload.success.toLowerCase())
      );
      return {
        ...state,
        SearchCountries: result,
      };
    case "SORT_BY": {
      let label = action.payload.label;

      const countries = state.countriesData;

      const result = countries.sort((a, b) => {
        let aValue = a[label];
        let bValue = b[label];

        if (label === "name") {
          aValue = aValue?.common;
          bValue = bValue?.common;
        }

        if (aValue < bValue) {
          return -1;
        }
        if (aValue > bValue) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        countriesData: result,
      };
    }
    default:
      return state;
  }
};

export default countriesReducer;
