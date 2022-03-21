import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
import './TransactionCategories.scss'

const TransactionCategories: React.FC = () => {

   const dispatch = useDispatch()
   const transaction = useSelector((state: any) => state.transactionReducer)
   const currentValue = useSelector((state: any) => state.calculateReducer.value)
   const transactionCategories = useSelector((state: any) => state.transactionCategoriesReducer.expensesCategory)
   const isIncome = useSelector((state: any) => state.transactionCategoriesReducer.isIncome)

   const getTransactions = () => {
      dispatch({
         type: 'LOAD_TRANSACTIONS_REQUEST'
      })
   }

   const getExpensesCategory = () => {
      dispatch({
         type: 'LOAD_EXPENSES_CATEGORY_REQUEST'
      })
   }

   const getIncomeCategory = () => {

      dispatch({
         type: 'LOAD_EXPENSES_CATEGORY_REQUEST'
      })
   }

   useEffect(() => getTransactions(), [])
   useEffect(() => getIncomeCategory(), [])
   // useEffect(() => getExpensesCategory(), [])

   const createTransactionCard = async (item: any) => {
      const transactonCard = {
         transactionCategory: item.transactionCategory,
         comment: '',
         transactionValue: currentValue
      }
      dispatch({
         type: 'CREATE_TRANSACTION_CARD',
         payload: transactonCard
      })
   }

   // const createPositiveTransaction = (item: any) => {
   //    dispatch({
   //       type: 'POSITIVE_CHANGE_MY_MONEY_VALUE',
   //       payload: +currentValue
   //    })
   //    dispatch({
   //       type: 'CREATE_TRANSACTION_CARD',
   //       payload: {
   //          item: item,
   //          currentValue: currentValue,
   //          color: 'green'
   //       }
   //    })
   //    dispatch({
   //       type: 'ZEROING_CALCULATE_VALUE',
   //       payload: item
   //    })
   // }
   // const createNegativeTransaction = (item: any) => {
   //    dispatch({
   //       type: 'NEGATIVE_CHANGE_MY_MONEY_VALUE',
   //       payload: +currentValue
   //    })
   //    dispatch({
   //       type: 'CREATE_TRANSACTION_CARD',
   //       payload: {
   //          item: item,
   //          currentValue: currentValue,
   //          color: 'red'
   //       }
   //    })
   //    dispatch({
   //       type: 'ZEROING_CALCULATE_VALUE',
   //       payload: item
   //    })
   // }

   return <div>
      <div className="transaction-categories">{

         transactionCategories.map((item: any, index: number) =>
            <span
               className="transaction-icon"
               key={index}
               onClick={() => createTransactionCard(item)
               }>{item.transactionCategory}</span>)
      }
      </div>
      {transaction.map((t: any, index: number) => <TransactionBlock
         transactionCategory={t.transactionCategory}
         key={t.id}
         transactionValue={t.transactionValue}
         id={t.id}
      />)}
   </div>
}

export default TransactionCategories