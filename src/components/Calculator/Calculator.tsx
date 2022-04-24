import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Calculator.scss'

const Calculator: React.FC = () => {

   const dispatch = useDispatch()
   const inputValue = useSelector((state: any) => state.calculateReducer.value)

   const calculatorItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0]

   const addValue = (e: any) => {
      if (!isNaN(e.target.value)) {
         dispatch({
            type: 'ADD_CALCULATE_VALUE',
            payload: e.target.value
         })
      }
   }

   const changeValue = (item: any) => {
      dispatch({
         type: 'CHANGE_CALCULATE_VALUE',
         payload: item
      })
   }

   const deleteLastItem = () => {
      dispatch({
         type: 'DELETE_CALCULATE_VALUE',
      })
   }

   return <div>
      <input
         type="text"
         value={inputValue}
         onChange={addValue}
         className='calculator-input'
         placeholder='Введите сумму'
      />
      <div className="calculator">
         {calculatorItem.map((item) =>
            <div
               key={item}
               className="calculator-item"
               onClick={() => changeValue(item)} >{item}</div>
         )}
         <div className="calculator-item"
            onClick={deleteLastItem} >C</div>
      </div>
   </div >
}

export default Calculator