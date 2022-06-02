const initialState = {
    loading: false,
    countriesData: [],
    error: ''
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_COUNTRIES_SUCCESS':
            return {
                loading: false,
                countriesData: action.payload,
                error: ''

            }
        case 'FETCH_COUNTRIES_FAILURE':
            return {
                loading: false,
                countriesData: [],
                error: action.payload
            }
        default:
            return state;
    }
}; 

export default countriesReducer