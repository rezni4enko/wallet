import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, } from "react-router-dom";
import { fetchTransactionById } from "../../API/transactionApi";
import Navbar from "../Navbar/Navbar";
import './Transaction.scss'

const Transaction: React.FC = () => {

   let transaction = useSelector((state: any) => state.transactionIdReducer)
   console.log(transaction)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   let params = useParams()
   const transactionId: any = params.id
   console.log(transaction.created_at)

   useEffect(() => setTransactionById(), [])

   const setTransactionById: any = async () => {
      const tr = await fetchTransactionById(transactionId)
      dispatch({
         type: 'SET_TRANSACTION_REQUEST_BY_ID',
         payload: tr
      })
   }

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
            <li>{transaction.created_at}</li>
         </ul>
         <ul className="transaction-line">
            <li>Комментарий</li>
            <li>{transaction.comment || "---"}</li>
         </ul>

      </div>
      <button onClick={deleteTransaction}>Удалить</button>

   </>
}

export default Transaction