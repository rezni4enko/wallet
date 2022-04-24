import React from "react";
import Calculator from '../Calculator/Calculator';
import MyMoney from "../MyMoney/MyMoney";
import Navbar from '../Navbar/Navbar';
import TransactionCategories from "../TransactionCategories/TransactionCategories";

const Expenses: React.FC = () => {

   return <>
      <Navbar />
      <MyMoney />
      <Calculator />
      <TransactionCategories />
   </>
}

export default Expenses