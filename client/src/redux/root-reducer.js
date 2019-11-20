import { combineReducers } from "redux";

import szablonReducer from "./szablon/szablon.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  szablon: szablonReducer,
  user: userReducer
});

export default rootReducer;
