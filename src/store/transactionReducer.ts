const CREATE_TRANSACTION_CARD = 'CREATE_TRANSACTION_CARD'

interface TransactionState {
   transactions: any[]
}

interface TransactionAction {
   type: string;
   payload?: any;
}

const initialState: TransactionState = {
   transactions: [
      // { name: '', count: '', date: '', },
   ]
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
            }]
         }
      default:
         return state
   }
}

export default transactionReducer