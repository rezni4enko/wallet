import { CollectionsBookmarkOutlined, StarRate } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, } from "react-router-dom";
import { fetchTransactionById } from "../../API/transactionApi";
import Navbar from "../Navbar/Navbar";
import './Transaction.scss'

const Transaction: React.FC = () => {

   let transaction = useSelector((state: any) => state.transactionIdReducer)
   let state = useSelector((state: any) => state)
   console.log(state)
   // const [isChooseCategory, setIsChooseCategory] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   let params = useParams()
   const transactionId: any = params.id

   useEffect(() => setTransactionById(), [])

   const setTransactionById: any = async () => {
      const tr = await fetchTransactionById(transactionId)
      dispatch({
         type: 'SET_TRANSACTION_REQUEST_BY_ID',
         payload: tr
      })
      // dispatch({
      //    type: 'LOAD_TRANSACTION_REQUEST_BY_ID',
      //    payload: transactionId
      // })
   }

   // transaction = transaction.filter((item: any) => item.id === Number(params.id))
   // transaction = transaction[0]

   // const chooseCategory = () => {
   //    setIsChooseCategory(true)
   // }

   // const setCategory = () => {
   //    dispatch({
   //       type: 'CHANGE_CATEGORY_TRANSACTION_CARD',
   //       payload: params.id
   //    })
   // }

   const deleteTransaction = () => {
      dispatch({
         type: 'DELETE_TRANSACTION',
         payload: transactionId
      })
      navigate('/')
   }

   return <>
      <Navbar />
      <div className="transaction-wrapper">
         <ul className="transaction-line">
            <li>Статья</li>
            <li>{transaction.transactionCategory}</li>
         </ul>
         <ul className="transaction-line">
            <li>Сумма</li>
            <li>{transaction.transactionValue}</li>
         </ul>
         <ul className="transaction-line">
            <li>Дата</li>
            <li>{ }</li>
         </ul>
         <ul className="transaction-line">
            <li>Комментарий</li>
            <li>{transaction.comment || "---"}</li>
         </ul>
         {/* {isChooseCategory &&
            <div>
               {transactionCategories.isIncome
                  ? transactionCategories.income.map((item: any, index: number) =>
                     <span key={index} onClick={}>{item}</span>)
                  : transactionCategories.expenses.map((item: any, index: number) =>
                     <span key={index} onClick={}>{item}</span>)}
            </div>} */}
      </div>
      <button onClick={deleteTransaction}>Удалить</button>
      <button onClick={setTransactionById}>get</button>
   </>
}

export default Transaction