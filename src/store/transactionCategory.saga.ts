import { changeInMainPage, deleteTransactionCategory, fetchTransactionCategory } from './../API/transactionCategory.api';
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

function* deleteTransactionCategoryRequest(action: any) {
   try {
      yield call(deleteTransactionCategory, action.payload)
      yield put({ type: 'LOAD_TRANSACTION_CATEGORY_REQUEST' })
   } catch (e: any) {
      console.log('error delete transaction category')
   }
}

function* changeInMainPageRequest(action: any) {
   try {
      yield call(changeInMainPage, action.payload.id, action.payload)
      yield put({ type: 'LOAD_TRANSACTION_CATEGORY_REQUEST' })
   } catch (e: any) {
      console.log('error delete transaction category')
   }
}

export default function* transactionCategorySaga() {
   yield takeEvery('LOAD_TRANSACTION_CATEGORY_REQUEST', loadTransactionCategoryRequest)
   yield takeEvery('DELETE_TRANSACTION_CATEGORY_REQUEST', deleteTransactionCategoryRequest)
   yield takeEvery('CHANGE_IN_MAIN_PAGE_REQUEST', changeInMainPageRequest)
   // yield takeEvery('DELETE_TRANSACTION', deleteTransactionCard)
}
