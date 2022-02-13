const POSITIVE_CHANGE_MY_MONEY_VALUE = 'POSITIVE_CHANGE_MY_MONEY_VALUE'
const NEGATIVE_CHANGE_MY_MONEY_VALUE = 'NEGATIVE_CHANGE_MY_MONEY_VALUE'

interface myMoneyState {
   money: number;
}

interface myMoneyAction {
   type: string;
   payload?: any;
}


const initialState: myMoneyState = {
   money: 0,
}

const myMoneyReducer = (state = initialState, action: myMoneyAction): myMoneyState => {
   switch (action.type) {
      case POSITIVE_CHANGE_MY_MONEY_VALUE:
         return {
            ...state,
            money: (state.money + action.payload)
         }
      case NEGATIVE_CHANGE_MY_MONEY_VALUE:
         return {
            ...state,
            money: (state.money - action.payload)
         }
      default:
         return state
   }
}

export default myMoneyReducer