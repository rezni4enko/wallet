const ADD_CALCULATE_VALUE = 'ADD_CALCULATE_VALUE'
const CHANGE_CALCULATE_VALUE = 'CHANGE_CALCULATE_VALUE'
const DELETE_CALCULATE_VALUE = 'DELETE_CALCULATE_VALUE'
const ZEROING_CALCULATE_VALUE = 'ZEROING_CALCULATE_VALUE'

interface CalculateState {
   value: string;
}

interface CalculateAction {
   type: string;
   payload?: any;
}


const initialState: CalculateState = {
   value: '',
}

const calculateReducer = (state = initialState, action: CalculateAction): CalculateState => {
   switch (action.type) {
      case ADD_CALCULATE_VALUE:
         return {
            ...state,
            value: action.payload
         }
      case CHANGE_CALCULATE_VALUE:
         const n = state.value + action.payload
         return {
            ...state,
            value: n
         }
      case DELETE_CALCULATE_VALUE:
         return {
            ...state,
            value: (state.value.slice(0, -1))
         }
      case ZEROING_CALCULATE_VALUE:
         return {
            ...state,
            value: ''
         }

      default:
         return state
   }
}

export default calculateReducer