export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      dispatch({type: "FETCH_COUNTRIES_REQUEST" })
      const response = await fetch("https://restcountries.com/v3.1/all").then(
        (response) => response.json()
      );
      console.log(response, "RESPONSE FROM THUNK");
      dispatch({type: "FETCH_COUNTRIES_SUCCESS", payload: response })
    } catch (error) {
      console.log(error, "Error");
      dispatch({ type: "FETCH_COUNTRIES_FAILURE", payload: error })
    }
  };
};
