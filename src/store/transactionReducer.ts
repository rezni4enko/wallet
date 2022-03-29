const SET_TRANSACTION_REQUEST_CARD = 'SET_TRANSACTION_REQUEST_CARD'

interface TransactionState {
   transactionCategory: string
   transactionValue: number | null
   isIncome: boolean
   comment: string
   idUser?: number
}

interface TransactionAction {
   type: string;
   payload?: any;
}

const initialState: Array<TransactionState> = [
   { transactionCategory: '', isIncome: true, transactionValue: null, comment: '' }
]

const transactionReducer = (state = initialState, action: TransactionAction): Array<TransactionState> => {
   switch (action.type) {
      case SET_TRANSACTION_REQUEST_CARD:
         return action.payload
      default:
         return state
   }
}

export default transactionReducer