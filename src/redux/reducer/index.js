import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";

const allReducers = combineReducers({
    countriesData: countriesReducer,
    countryitemData: countryReducer,
});

export default allReducers;
