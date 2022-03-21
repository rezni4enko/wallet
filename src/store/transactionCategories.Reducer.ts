const CHANGE_TRANSACTIONS_CATEGORIES = 'CHANGE_TRANSACTIONS_CATEGORIES'
const SET_EXPENSES_CATEGORY_REQUEST = 'SET_EXPENSES_CATEGORY_REQUEST'
const SET_INCOME_CATEGORY_REQUEST = 'SET_INCOME_CATEGORY_REQUEST'

interface TransactionCategoriesAction {
   type: string;
   payload?: any;
}

const initialState: any = {
   expensesCategory: [],
   incomeCategory: [],
   isIncome: true,
}

const transactionCategoriesReducer =
   (state = initialState, action: any): any => {
      switch (action.type) {
         case SET_EXPENSES_CATEGORY_REQUEST:
            return {
               ...state,
               expensesCategory: action.payload
            }
         case SET_INCOME_CATEGORY_REQUEST:
            return {
               ...state,
               expensesCategory: action.payload
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