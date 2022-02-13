const CREATE_TRANSACTION_CARD = 'CREATE_TRANSACTION_CARD'

interface TransactionState {
   transactions: any[],
   color: string
}

interface TransactionAction {
   type: string;
   payload?: any;
}

const initialState: TransactionState = {
   transactions: [
      // { name: '', count: '', date: '', },
   ],
   color: ''
}

const transactionReducer = (state = initialState, action: TransactionAction): TransactionState => {
   switch (action.type) {
      case CREATE_TRANSACTION_CARD:
         return {
            ...state,
            transactions: [...state.transactions, {
               name: action.payload.item,
               count: action.payload.currentValue,
               date: Date.now()
            }],
            color: action.payload.color
         }
      default:
         return state
   }
}

export default transactionReducer