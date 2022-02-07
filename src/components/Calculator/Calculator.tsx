import React, { useState } from "react";
import './Calculator.scss'

const Calculator: React.FC = () => {

   const calculatorItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0]
   const [inputValue, setInputValue] = useState('')

   const addValue = (e: any) => {
      setInputValue(e.target.value)
   }

   const changeValue = (item: any) => {
      return setInputValue(inputValue + item)
   }

   const deleteLastItem = () => {
      setInputValue(inputValue.slice(0, -1))
   }

   return <div>
      <input
         type="text"
         value={inputValue}
         onChange={addValue}
         className='calculator-input'
      />
      <div className="calculator">
         {calculatorItem.map((item) =>
            <div
               className="calculator-item"
               onClick={() => changeValue(item)}>{item}</div>
         )}
         <div className="calculator-item" onClick={deleteLastItem}>C</div>
      </div>
   </div >
}

export default Calculator