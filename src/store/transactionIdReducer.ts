const SET_TRANSACTION_REQUEST_BY_ID = 'SET_TRANSACTION_REQUEST_BY_ID'

interface TransactionIdState {
   transactionCategory: string
   comment: string
   transactionValue: number | null
}

interface TransactionAction {
   type: typeof SET_TRANSACTION_REQUEST_BY_ID;
   payload?: any;
}

const initialState: TransactionIdState = { transactionCategory: '', comment: "", transactionValue: null }

const transactionIdReducer = (state = initialState, action: TransactionAction): TransactionIdState => {
   switch (action.type) {
      case SET_TRANSACTION_REQUEST_BY_ID:
         return action.payload
      default:
         return state
   }
}

export default transactionIdReducer