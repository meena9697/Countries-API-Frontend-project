import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import allReducers from "./reducer";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const middlewares = [thunk]
let composeEnhancers = compose

if(process.env.NODE_ENV === 'development'){
  if((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  }
}

const store = createStore(
  allReducers, 
  composeEnhancers(applyMiddleware(...middlewares)
  ));
export default store;
