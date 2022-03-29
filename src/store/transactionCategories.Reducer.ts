const CHANGE_TRANSACTIONS_CATEGORIES = 'CHANGE_TRANSACTIONS_CATEGORIES'
const SET_TRANSACTION_CATEGORY_REQUEST = 'SET_TRANSACTION_CATEGORY_REQUEST'

interface TransactionCategoriesAction {
   type: string;
   payload?: any;
}

const initialState: any = {
   transactionCategory: [],
   isIncome: true,
}

const transactionCategoriesReducer =
   (state = initialState, action: any): any => {
      switch (action.type) {
         case SET_TRANSACTION_CATEGORY_REQUEST:
            return {
               ...state,
               transactionCategory: action.payload
            }
         case CHANGE_TRANSACTIONS_CATEGORIES:
            return {
               ...state,
               isIncome: action.payload
            }
         default:
            return state
      }
   }

export default transactionCategoriesReducer