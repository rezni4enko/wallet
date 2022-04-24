import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SettingElement.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';


const SettingElement: React.FC<{ element: any, id: number, isInMainPage: boolean }> = ({ element, id, isInMainPage }) => {

   const dispatch = useDispatch()
   const deleteElement = () => {
      dispatch({
         type: 'DELETE_TRANSACTION_CATEGORY_REQUEST',
         payload: id
      })
   }

   const changeInMainPage = () => {
      dispatch({
         type: 'CHANGE_IN_MAIN_PAGE_REQUEST',
         payload: {
            id,
            inMainPage: !isInMainPage
         }
      })

   }

   return <div className='settings-element'>
      <CloseIcon onClick={deleteElement} className='element-delete' />
      <div className='element-name'>{element}</div>
      <FormControlLabel className='element-checkbox' control={<Checkbox checked={isInMainPage} onChange={changeInMainPage} />} label="Отображать на главной странице" />
      {/* <Checkbox
         checked={isInMainPage}
         //   onChange={handleChange}
         //   inputProps={{ 'aria-label': 'controlled' }}
         className='element-checkbox'
         label="Отображать на главной странице"
      /> */}

   </div>
}

export default SettingElement