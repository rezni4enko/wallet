import { fetchMyMoney } from './../API/myMoneyApi';
import { myMoneyRequestDTO } from './../models/myMoneyRequest.dto';
import { call, put, takeEvery } from 'redux-saga/effects'

function* loadMyMoneyRequest() {
   try {
      const myMoney: myMoneyRequestDTO[] = yield call(fetchMyMoney)
      yield put({ type: 'SET_MY_MONEY_VALUE', payload: myMoney })
   } catch (e: any) {
      console.log('error loadMyMoneyRequest')
   }
}

export default function* myMoneySaga() {
   yield takeEvery('LOAD_MY_MONEY_REQUEST', loadMyMoneyRequest)
}