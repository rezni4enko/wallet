import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Transaction.scss'

const Transaction: React.FC = () => {

   let transaction = useSelector((state: any) => state.transactionReducer.transactions)
   let transactionCategories = useSelector((state: any) => state.transactionCategoriesReducer)

   const [isChooseCategory, setIsChooseCategory] = useState(false)

   let params = useParams()

   transaction = transaction.filter((item: any) => item.id === Number(params.id))
   transaction = transaction[0]

   const chooseCategory = () => {
      setIsChooseCategory(true)
   }

   const dispatch = useDispatch()

   const setCategory = (categoryName: string) => {
      dispatch({
         type: 'CHANGE_CATEGORY_TRANSACTION_CARD',
         payload: categoryName
      })
   }

   return <>
      <Navbar />
      <div className="transaction-wrapper">
         <ul className="transaction-line">
            <li>Статья</li>
            <li onClick={chooseCategory}>{transaction.name}</li>
         </ul>
         <ul className="transaction-line">
            <li>Сумма</li>
            <li>{transaction.count}</li>
         </ul>
         <ul className="transaction-line">
            <li>Дата</li>
            <li>{transaction.date}</li>
         </ul>
         <ul className="transaction-line">
            <li>Комментарий</li>
            <li>пока нет</li>
         </ul>
         {isChooseCategory &&
            <div>
               {transactionCategories.isIncome
                  ? transactionCategories.income.map((item: any, index: number) =>
                     <span key={index} onClick={(item: any) => setCategory(item)}>{item}</span>)
                  : transactionCategories.expenses.map((item: any, index: number) =>
                     <span key={index} onClick={(item: any) => setCategory(item)}>{item}</span>)}
            </div>}
      </div>
   </>
}

export default Transaction