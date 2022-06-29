import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { bookReducer } from "./BookReducer/book.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
