import React from "react";
import { NavLink } from "react-router-dom";
import './TransactionBlock.scss'

const TransactionBlock: React.FC<{ transactionCategory: any, transactionValue: number, id: number }>
   = ({ transactionCategory, transactionValue, id }) => {


      return <NavLink to={`/transaction/${id}`}
         className='card-action'
      >
         <div>{transactionCategory}</div>
         <span>{transactionValue}</span>
      </NavLink >
   }

export default TransactionBlock