const SET_MY_MONEY_VALUE = 'SET_MY_MONEY_VALUE'

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
      case SET_MY_MONEY_VALUE:
         const myMoney = action.payload
         return {
            ...state,
            money: myMoney[myMoney.length - 1].money
         }
      default:
         return state
   }
}

export default myMoneyReducer