import React from "react";
import './Navbar.scss'

const Navbar: React.FC = () => {

   return <nav className="navbar">
      <ul className="navbar-list">
         <li className="navbar-item"><a href="">Расходы</a></li>
         <li className="navbar-item"><a href="">Доходы</a></li>
      </ul>
      <span className="navbar-item"><a href="">Статистика</a></span>
   </nav>
}

export default Navbar 