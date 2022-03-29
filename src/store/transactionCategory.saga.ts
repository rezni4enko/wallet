import { fetchTransactionCategory } from './../API/transactionCategory.api';
import { call, put, takeEvery } from 'redux-saga/effects'
import { transactionsRequestDTO } from '../models/transactionsRequest.dto';

function* loadTransactionCategoryRequest() {
   try {
      const transactionCategory: transactionsRequestDTO[] = yield call(fetchTransactionCategory);
      yield put({ type: 'SET_TRANSACTION_CATEGORY_REQUEST', payload: transactionCategory })
   } catch (e: any) {
      console.log('error get transaction category')
   }
}

// function* createTransactionCard(action: any) {
//    try {
//       yield call(createTransactionCardRequest(action.payload));
//       yield put({ type: 'LOAD_TRANSACTIONS_REQUEST' })
//    } catch (e: any) {
//       yield put({ type: 'GET_USERS_FAILED', message: e.message })
//    }
// }

// function* deleteTransactionCard(action: any) {
//    try {
//       yield call(deleteTransactionCardRequest(action.payload))
//       yield put({ type: 'LOAD_TRANSACTIONS_REQUEST' })
//    } catch (e: any) {
//       yield put({ type: 'GET_USERS_FAILED', message: e.message })

//    }
// }

export default function* transactionCategorySaga() {
   yield takeEvery('LOAD_TRANSACTION_CATEGORY_REQUEST', loadTransactionCategoryRequest)
   // yield takeEvery('CREATE_TRANSACTION_CARD', createTransactionCard)
   // yield takeEvery('DELETE_TRANSACTION', deleteTransactionCard)
}
