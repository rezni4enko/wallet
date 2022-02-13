import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
import './TransactionCategories.scss'

const TransactionCategories: React.FC = () => {

   const dispatch = useDispatch()
   const transaction = useSelector((state: any) => state.transactionReducer.transactions)
   const currentValue = useSelector((state: any) => state.calculateReducer.value)
   const expenses = useSelector((state: any) => state.transactionCategoriesReducer.expenses)
   const income = useSelector((state: any) => state.transactionCategoriesReducer.income)
   const isIncome = useSelector((state: any) => state.transactionCategoriesReducer.isIncome)

   const createPositiveTransaction = (item: any) => {
      dispatch({
         type: 'POSITIVE_CHANGE_MY_MONEY_VALUE',
         payload: +currentValue
      })
      dispatch({
         type: 'CREATE_TRANSACTION_CARD',
         payload: {
            item: item,
            currentValue: currentValue,
            color: 'green'
         }
      })
      dispatch({
         type: 'ZEROING_CALCULATE_VALUE',
         payload: item
      })
   }
   const createNegativeTransaction = (item: any) => {
      dispatch({
         type: 'NEGATIVE_CHANGE_MY_MONEY_VALUE',
         payload: +currentValue
      })
      dispatch({
         type: 'CREATE_TRANSACTION_CARD',
         payload: {
            item: item,
            currentValue: currentValue,
            color: 'red'
         }
      })
      dispatch({
         type: 'ZEROING_CALCULATE_VALUE',
         payload: item
      })
   }

   return <div>
      {isIncome
         ? <div className="transaction-categories">{income.map((item: string, index: number) =>
            <span
               className="transaction-icon"
               key={index}
               onClick={() => createNegativeTransaction(item)
               }>{item}</span>)}
         </div>
         : <div className="transaction-categories">{expenses.map((item: string, index: number) =>
            <span
               className="transaction-icon"
               key={index}
               onClick={() => createPositiveTransaction(item)
               }>{item}</span>)}
         </div>
      }
      {transaction.map((t: any, index: number) => <TransactionBlock
         color={t.color}
         name={t.name}
         key={index}
         date={t.date}
         count={t.count}
      />)}
   </div>
}

export default TransactionCategories