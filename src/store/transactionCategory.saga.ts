import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchExpensesCategory, fetchIncomeCategory } from '../API/transactionCategory.api';
import { transactionsRequestDTO } from '../models/transactionsRequest.dto';

function* loadExpensesCategoryRequest() {
   try {
      const transactionCategory: transactionsRequestDTO[] = yield call(fetchExpensesCategory);
      yield put({ type: 'SET_EXPENSES_CATEGORY_REQUEST', payload: transactionCategory })
   } catch (e: any) {
      yield put({ type: 'GET_USERS_FAILED', message: e.message })
   }
}

function* loadIncomeCategoryRequest() {
   try {
      const transactionCategory: transactionsRequestDTO[] = yield call(fetchIncomeCategory);
      yield put({ type: 'SET_INCOME_CATEGORY_REQUEST', payload: transactionCategory })
   } catch (e: any) {
      yield put({ type: 'GET_USERS_FAILED', message: e.message })
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
   yield takeEvery('LOAD_EXPENSES_CATEGORY_REQUEST', loadExpensesCategoryRequest)
   yield takeEvery('LOAD_INCOME_CATEGORY_REQUEST', loadIncomeCategoryRequest)
   // yield takeEvery('CREATE_TRANSACTION_CARD', createTransactionCard)
   // yield takeEvery('DELETE_TRANSACTION', deleteTransactionCard)
}
