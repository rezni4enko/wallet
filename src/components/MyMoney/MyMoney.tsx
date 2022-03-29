import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './MyMoney.scss'

const MyMoney: React.FC = () => {

   const money = useSelector((state: any) => state.myMoneyReducer.money)
   const dispatch = useDispatch()
   useEffect(() => getMyMoney(), [])

   function getMyMoney() {
      dispatch({
         type: 'LOAD_MY_MONEY_REQUEST'
      })
   }

   return <div className="my-money">
      <span>Мои деньги</span>
      <span>{money}</span>
   </div>
}

export default MyMoney