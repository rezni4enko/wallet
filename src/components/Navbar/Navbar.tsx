import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Navbar.scss'

const Navbar: React.FC = () => {

   // const isIncome = useSelector((state: any) => state.transactionCategoriesReducer.isIncome)
   const dispatch = useDispatch()

   const changeIsIncome = (bool: boolean) => {
      dispatch({
         type: 'CHANGE_TRANSACTIONS_CATEGORIES',
         payload: bool,
      })
   }

   return <nav className="navbar">
      <ul className="navbar-list">
         <li className="navbar-item"><span onClick={() => changeIsIncome(true)}>Расходы</span></li>
         <li className="navbar-item"><span onClick={() => changeIsIncome(false)}>Доходы</span></li>
      </ul>
      <span className="navbar-item"><a href="">Статистика</a></span>
   </nav>
}

export default Navbar 