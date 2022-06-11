const initialState = {
  loading: false,
  countriesData: [],
  SearchCountries: [],
  error: "",
  sortBy: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_COUNTRIES_SUCCESS":
      console.log(state, " STATE FROM SUCCESS");
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

    case "SORT_BY_REGION": // Ascending
      const region = state.countriesData;
      const sortByRegion = region.sort((a, b) => {
        if (a.region < b.region) {
          return -1;
        }
        if (a.region > b.region) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        countriesData: sortByRegion,
      };

    case "SORT_BY_NAME": //Descending
      const name = state.countriesData;
      const sortByName = name.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return 1;
        }
        if (a.name.common > b.name.common) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        countriesData: sortByName,
      };
   
    case "SORT_BY_POP": // Descending
      const population = state.countriesData;
      const sortByPopulation = population.sort(
        (a, b) => b.population - a.population
      );
      return {
        ...state,
        countriesData: sortByPopulation,
      };

    default:
      return state;
  }
};

export default countriesReducer;
