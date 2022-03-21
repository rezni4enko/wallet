import { all, spawn } from 'redux-saga/effects'
import transactionSaga from "./transaction.saga";
import transactionCategorySaga from './transactionCategory.saga';

export default function* rootSaga() {
   yield spawn(transactionSaga)
   yield spawn(transactionCategorySaga)
}
