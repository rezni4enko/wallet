import React from 'react'
import './FormTransactionCatogories.scss'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const FormTransactionCategories: React.FC<{ setFormAddCatogoryActive: any, formAddCatogoryActive: boolean }> = (
   { setFormAddCatogoryActive, formAddCatogoryActive }) => {

   const [checked, setChecked] = React.useState([true, false]);

   const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
   };

   const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
   };

   const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
   };



   return <div>
      <FormControl>
         <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
         />
         <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
         />

         <Input id="my-input" aria-describedby="my-helper-text" />


      </FormControl>

   </div>
}

export default FormTransactionCategories