const CHANGE_TRANSACTIONS_CATEGORIES = 'CHANGE_TRANSACTIONS_CATEGORIES'

interface TransactionCategoriesState {
   expenses: string[]
   income: string[]
   isIncome: boolean
}

interface TransactionCategoriesAction {
   type: string;
   payload?: any;
}

const initialState: TransactionCategoriesState = {
   expenses: [
      'Зарплата',
      'Подарки',
      'Подработка',
      'Депозит',
      'Выйгрыш',
   ],
   income: [
      'Одежда',
      'Продукты',
      'Машина',
      'Топливо',
      'Отдых',
   ],
   isIncome: true,
}

const transactionCategoriesReducer =
   (state = initialState, action: TransactionCategoriesAction): TransactionCategoriesState => {
      switch (action.type) {
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