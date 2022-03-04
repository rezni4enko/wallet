const CREATE_TRANSACTION_CARD = 'CREATE_TRANSACTION_CARD'
const CHANGE_CATEGORY_TRANSACTION_CARD = 'CHANGE_CATEGORY_TRANSACTION_CARD'

interface TransactionState {
   transactions: any[],

}

interface TransactionAction {
   type: string;
   payload?: any;
}

const initialState: TransactionState = {
   transactions: [
      // { id: null, name: '', count: '', date: '',  color: '' },
   ],

}

const transactionReducer = (state = initialState, action: TransactionAction): TransactionState => {
   switch (action.type) {
      case CREATE_TRANSACTION_CARD:
         return {
            ...state,
            transactions: [...state.transactions, {
               name: action.payload.item,
               count: action.payload.currentValue,
               date: Date.now(),
               color: action.payload.color,
               id: Date.now(),
            }],
         }
      case CHANGE_CATEGORY_TRANSACTION_CARD:
         return {
            ...state,
            transactions: [...state.transactions, {
               name: action.payload,
            }],
         }
      default:
         return state
   }
}

export default transactionReducer