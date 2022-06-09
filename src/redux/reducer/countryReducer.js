const initialState = {
  loading: false,
  countryitemData: [],
  error: "",
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COUNTRY_SUCCESS":
        return {
        loading: false,
        countryitemData: action.payload,
        error: "",
      };
    case "FETCH_COUNTRY_FAILURE":
      return {
        loading: false,
        countryitemData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
