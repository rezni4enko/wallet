import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
import './TransactionCategories.scss'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TransactionCategories: React.FC = () => {

   const dispatch = useDispatch()
   const transaction = useSelector((state: any) => state.transactionReducer)
   const currentValue = useSelector((state: any) => state.calculateReducer.value)
   const transactionCategories = useSelector((state: any) => state.transactionCategoriesReducer.transactionCategory)
   const isIncome = useSelector((state: any) => state.transactionCategoriesReducer.isIncome)

   const getTransactions = () => {
      dispatch({
         type: 'LOAD_TRANSACTIONS_REQUEST'
      })
   }

   const getTransactionCategory = () => {
      dispatch({
         type: 'LOAD_TRANSACTION_CATEGORY_REQUEST'
      })
   }

   useEffect(() => getTransactions(), [])
   useEffect(() => getTransactionCategory(), [])

   const createTransactionCard = async (item: any) => {
      const transactionCard = {
         transactionCategory: item.transactionCategory,
         comment: '',
         transactionValue: currentValue,
         isIncome: isIncome,
         idUser: 1
      }
      dispatch({
         type: 'CREATE_TRANSACTION_CARD',
         payload: transactionCard
      })
      dispatch({
         type: 'LOAD_MY_MONEY_REQUEST'
      })
   }

   const options = [
      'None',
      'Atria',
      'Callisto',
      'Dione',
      'Ganymede',
      'Hangouts Call',
      'Luna',
      'Oberon',
      'Phobos',
      'Pyxis',
      'Sedna',
      'Titania',
      'Triton',
      'Umbriel',
   ];

   const ITEM_HEIGHT = 48;


   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   }

   return <div>

      <div className="transaction-categories">
         <div>
            <IconButton
               aria-label="more"
               id="long-button"
               aria-controls={open ? 'long-menu' : undefined}
               aria-expanded={open ? 'true' : undefined}
               aria-haspopup="true"
               onClick={handleClick}
            >
               <MoreVertIcon />
            </IconButton>
            <Menu
               id="long-menu"
               MenuListProps={{
                  'aria-labelledby': 'long-button',
               }}
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               PaperProps={{
                  style: {
                     maxHeight: ITEM_HEIGHT * 4.5,
                     width: '20ch',
                  },
               }}
            >
               {transactionCategories.map((option: any, index: number) => (
                  <MenuItem key={option.id}
                     //  selected={option.transactionCategory === 'Одежда'} 
                     onClick={handleClose}>
                     {option.transactionCategory}
                  </MenuItem>
               ))}
            </Menu>
         </div>
         {


            transactionCategories.map((item: any) => {
               if (isIncome === item.isIncome) {
                  return <span
                     className="transaction-icon"
                     key={item.id}
                     onClick={() => createTransactionCard(item)
                     }>{item.transactionCategory}</span>
               }
            })
         }
      </div>
      {transaction.map((t: any) => <TransactionBlock
         transactionCategory={t.transactionCategory}
         key={t.id}
         transactionValue={t.transactionValue}
         id={t.id}
      />)}

   </div>
}

export default TransactionCategories