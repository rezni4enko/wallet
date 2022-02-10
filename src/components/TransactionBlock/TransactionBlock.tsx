import React from "react";
import './TransactionBlock.scss'

const TransactionBlock: React.FC<{ name: any, date: any, count: number }> = ({ name, date, count }) => {



   return <div className="kard-action">
      <div>{name}</div>

      <span>{count}</span>
      <span>{date}</span>
   </div>
}

export default TransactionBlock