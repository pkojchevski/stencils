import { combineReducers } from "redux";

import szablonReducer from "./szablon/szablon.reducer";

const rootReducer = combineReducers({
  szablon: szablonReducer
});

export default rootReducer;
