import { call, put, takeEvery } from 'redux-saga/effects'
import { createTransactionCardRequest, fetchAllTransactions, deleteTransactionCardRequest, fetchTransactionById } from '../API/transactionApi';
import { transactionsRequestDTO } from '../models/transactionsRequest.dto';

function* loadTransactonsRequest() {
   try {
      const transactions: transactionsRequestDTO[] = yield call(fetchAllTransactions)
      yield put({ type: 'SET_TRANSACTION_REQUEST_CARD', payload: transactions })
   } catch (e: any) {
      console.log('error loadtransactionsRequest')
   }
}

function* loadTransactonRequestById(action: any) {
   try {
      const transactionId: transactionsRequestDTO[] = yield call(fetchTransactionById, action.payload)
      yield put({ type: 'SET_TRANSACTION_REQUEST_BY_ID', payload: transactionId })
   } catch (e: any) {
      console.log('eror loadTransactonRequestById')
   }
}

function* createTransactionCard(action: any) {
   try {
      yield call(createTransactionCardRequest, action.payload)
      yield put({ type: 'ZEROING_CALCULATE_VALUE' })
      yield put({ type: 'LOAD_TRANSACTIONS_REQUEST' })
      yield put({ type: 'LOAD_MY_MONEY_REQUEST' })
   } catch (e: any) {
      console.log('eror createTransactionCardRequest')
   }
}

function* deleteTransactionCard(action: any) {
   try {
      yield call(deleteTransactionCardRequest, action.payload)
      yield put({ type: 'LOAD_TRANSACTIONS_REQUEST' })
   } catch (e: any) {
      console.log('error delete transaction')

   }
}

export default function* transactionSaga() {
   yield takeEvery('LOAD_TRANSACTIONS_REQUEST', loadTransactonsRequest)
   yield takeEvery('CREATE_TRANSACTION_CARD', createTransactionCard)
   yield takeEvery('DELETE_TRANSACTION', deleteTransactionCard)
   yield takeEvery('LOAD_TRANSACTION_REQUEST_BY_ID', loadTransactonRequestById)
}