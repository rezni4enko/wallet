import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
import './TransactionCategories.scss'

const TransactionCategories: React.FC = () => {

   const dispatch = useDispatch()
   const transaction = useSelector((state: any) => state.transactionReducer.transactions)
   const currentValue = useSelector((state: any) => state.calculateReducer.value)

   const createTransaction = (item: any) => {
      dispatch({
         type: 'CHANGE_MY_MONEY_VALUE',
         payload: +currentValue
      })
      dispatch({
         type: 'CREATE_TRANSACTION_CARD',
         payload: {
            item: item,
            currentValue: currentValue
         }
      })
      dispatch({
         type: 'ZEROING_CALCULATE_VALUE',
         payload: item
      })
   }

   const arrTransactions = [
      'Зарплата',
      'Подарки',
      'Подработка',
      'Депозит',
      'Выйгрыш',
   ]

   return <div>
      <div className="transaction-categories">{arrTransactions.map((item, index) =>
         <span
            className="transaction-icon"
            key={index}
            onClick={() => createTransaction(item)
            }>{item}</span>)
      }
      </div>{transaction.map((t: any, index: number) => <TransactionBlock
         name={t.name}
         key={index}
         date={t.date}
         count={t.count}
      />)}
   </div>
}

export default TransactionCategories