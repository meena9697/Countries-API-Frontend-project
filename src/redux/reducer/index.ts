import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";
import favouritesReducer from "./favouritesReducer";

const allReducers = combineReducers({
    countriesData: countriesReducer,
    countryitemData: countryReducer,
    favouritesData: favouritesReducer
});
export default allReducers;
