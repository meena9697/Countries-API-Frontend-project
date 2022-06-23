import { ActionTypes } from "../action/actiontypes"
import { Country } from "../../types";

type InitialState = {
  loading: Boolean,
  countryitemData: Country[]
  error: String | null
}
const initialState: InitialState = {
  loading: false,
  countryitemData: [],
  error: "",
};

const countryReducer = (state = initialState, action:ActionTypes ) => {
  switch (action.type) {
    case "FETCH_COUNTRY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COUNTRY_SUCCESS":
        return {
          ...state,
        loading: false,
        countryitemData: action.payload.response,
      };
    case "FETCH_COUNTRY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default countryReducer;
