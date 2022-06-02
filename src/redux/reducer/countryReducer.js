const initialCountryState = {
  loading: false,
  countryitemData: [],
  error: "",
};

const countryReducer = (state = initialCountryState, action) => {
  console.log("hi from country reducer", state);
  switch (action.type) {
    case "FETCH_COUNTRY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COUNTRY_SUCCESS":
     console.log(action.payload)
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
