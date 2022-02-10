import { combineReducers } from "redux";
import calculateReducer from "./calculateReducer";
import transactionReducer from "./transactionReducer";
import loginReducer from "./loginReducer";
import myMoneyReducer from "./myMoneyReducer";


const rootReducer = combineReducers({
   myMoneyReducer,
   calculateReducer,
   transactionReducer,
   loginReducer,
})

export default rootReducer;