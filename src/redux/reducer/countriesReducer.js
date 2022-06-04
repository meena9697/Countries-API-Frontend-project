const initialState = {
  loading: false,
  countriesData: [],
  SearchCountries: [],
  error: "",
};

const countriesReducer = (state = initialState, action) => {
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
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        SearchCountries: result,
      };

    default:
      return state;
  }
};

export default countriesReducer;
