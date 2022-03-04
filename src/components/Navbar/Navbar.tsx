import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar: React.FC = () => {

   const dispatch = useDispatch()

   const changeIsIncome = (bool: boolean) => {
      dispatch({
         type: 'CHANGE_TRANSACTIONS_CATEGORIES',
         payload: bool,
      })
   }

   return <nav className="navbar">
      <div className="navbar-list">
         <NavLink to='/*' className="navbar-item"><span onClick={() => changeIsIncome(true)}>Расходы</span></NavLink>
         <NavLink to='/*' className="navbar-item"><span onClick={() => changeIsIncome(false)}>Доходы</span></NavLink>
      </div>
      <NavLink to='/statistics' className="navbar-item">Статистика</NavLink>
   </nav>
}

export default Navbar  