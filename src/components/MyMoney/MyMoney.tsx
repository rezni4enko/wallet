import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './MyMoney.scss'

const MyMoney: React.FC = () => {

   const dispatch = useDispatch()
   const money = useSelector((state: any) => state.myMoneyReducer.money)
   console.log(money)

   return <div className="my-money">
      <span>Мои деньги</span>
      <span>{money}</span>
   </div>
}

export default MyMoney