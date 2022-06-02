export const fetchCountry = (country_name) => {
  return async (dispatch) => {
    console.log(country_name, "test")
    try {
      dispatch({type: "FETCH_COUNTRY_REQUEST" });
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country_name}`
      ).then((response) => response.json());
      console.log(response, "RESPONSE FROM THUNK COUNTRY");
      dispatch({ type: "FETCH_COUNTRY_SUCCESS", payload: response });
    } catch (error) {
      console.log(error, "Error");
      dispatch({ type: "FETCH_COUNTRY_FAILURE", payload: error });
    }
  };
};
