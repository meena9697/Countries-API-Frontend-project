export const fetchCountryRequest = () => {
  return {
      type: "FETCH_COUNTRY_REQUEST",
  };
};

export const fetchCountrySuccess = (response) => {
  console.log(response, "REDUCER_COUNTRYACTION");
  return {
      type: "FETCH_COUNTRY_SUCCESS",
      payload: response,
  };
};

export const fetchCountryFailure = (error) => {
  return {
      type: "FETCH_COUNTRY_FAILURE",
      payload: { error },
  };
};

export const fetchCountryData = (country_name) => {
  console.log(country_name, "COUNTRY_NAME");
  return async (dispatch) => {
      try {
          dispatch(fetchCountryRequest());
          console.log("LOADING....");
          const response = await fetch(
              `https://restcountries.com/v3.1/name/${country_name}`
          ).then((response) => response.json());
          //console.log(response, "BEFORE_RESPONSE_COUNTRYDATA");
          console.log(response, "RESPONSE_COUNTRYDATA");
          dispatch(fetchCountrySuccess(response));
      } catch (error) {
          dispatch(fetchCountryFailure(error));
      }
  };
};