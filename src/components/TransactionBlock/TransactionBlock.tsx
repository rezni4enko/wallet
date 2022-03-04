import React from "react";
import { NavLink } from "react-router-dom";
import './TransactionBlock.scss'

const TransactionBlock: React.FC<{ name: any, date: any, count: number, color: string, id: number }>
   = ({ name, date, count, color, id }) => {

      // const divStyles: CSS.Properties = {

      // }

      return <NavLink to={`/transaction/${id}`}
         className={`card-action ${color}-card`}

      >
         <div>{name}</div>
         <span>{count}</span>
         <span>{date}</span>
      </NavLink >
   }

export default TransactionBlock