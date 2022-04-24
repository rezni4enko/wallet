import { combineReducers } from "redux";
import calculateReducer from "./calculateReducer";
import transactionReducer from "./transactionReducer";
import myMoneyReducer from "./myMoneyReducer";
import transactionCategoriesReducer from "./transactionCategories.Reducer";
import transactionIdReducer from "./transactionIdReducer";

const rootReducer = combineReducers({
   myMoneyReducer,
   calculateReducer,
   transactionReducer,
   transactionCategoriesReducer,
   transactionIdReducer
})

export default rootReducer;