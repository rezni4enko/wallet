const LOGIN_USER = 'LOGIN_USER'

interface LoginState {
   login: string
   password: string
}

interface LoginAction {
   type: string;
   payload?: any;
}

const initialState: LoginState = { login: 'user', password: 'key', }



const loginReducer = (state = initialState, action: LoginAction): LoginState => {
   switch (action.type) {
      case LOGIN_USER:
         return {
            ...state,

         }
      default:
         return state
   }
}

export default loginReducer