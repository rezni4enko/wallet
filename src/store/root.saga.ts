import { all, spawn } from 'redux-saga/effects'
import myMoneySaga from './myMoney.saga';
import transactionSaga from "./transaction.saga";
import transactionCategorySaga from './transactionCategory.saga';

export default function* rootSaga() {
   yield spawn(transactionSaga)
   yield spawn(transactionCategorySaga)
   yield spawn(myMoneySaga)
}
