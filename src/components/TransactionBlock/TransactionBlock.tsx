import React from "react";
import './TransactionBlock.scss'

const TransactionBlock: React.FC<{ name: any, date: any, count: number, color: string }> = ({ name, date, count, color }) => {

   // const divStyles: CSS.Properties = {

   // }

   return <div
      className="kard-action"
   // style={divStyles}
   >
      <div>{name}</div>
      <span>{count}</span>
      <span>{date}</span>
   </div >
}

export default TransactionBlock