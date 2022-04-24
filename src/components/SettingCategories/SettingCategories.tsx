import React, { useState } from 'react'
import SettingElement from './SettingElement/SettingElement'
import './SettingCategories.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SettingCategories: React.FC<{ isIncome: boolean, transactionCategories: any, setSettingActive: any, settingActive: boolean }> = ({ isIncome, transactionCategories, settingActive, setSettingActive }) => {

   const [formAddCatogoryActive, setFormAddCatogoryActive] = useState(false)

   const addTransactionCategory = () => {
      setFormAddCatogoryActive(!formAddCatogoryActive)
   }

   return <div className={settingActive ? 'settings' : 'settings-none'}>

      <div className='settings-header'>Настройки</div>
      <div onClick={() => setSettingActive(false)} className='settings-close'>закрыть</div>
      <div className='settings-categories'>
         <div className='add-transactioncategory'>
            <AddCircleOutlineIcon onClick={addTransactionCategory} sx={{ fontSize: 60 }} color="action" />
         </div>
         {
            transactionCategories.map((item: any) => {
               if (isIncome === item.isIncome) {
                  return <SettingElement
                     element={item.transactionCategory}
                     key={item.id}
                     id={item.id}
                     isInMainPage={item.inMainPage} />
               }
            })
         }
      </div>
   </div>
}

export default SettingCategories