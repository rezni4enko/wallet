import axios from "axios";

const instance: any = axios.create({
   baseURL: 'http://localhost:5000'
})

export const fetchExpensesCategory = () => {
   return instance.get('/expensescategory')
      .then((response: any) => {
         return response.data
      })
}

export const fetchIncomeCategory = () => {
   return instance.get('/incomecategory')
      .then((response: any) => {
         return response.data
      })
}

// export const createTransactionCardRequest = (transactionCard: any) => {
//    return instance.post('/transaction', transactionCard)
// }

// export const deleteTransactionCardRequest = (id: number) => {
//    return instance.delete(`/transaction/${id}`)
// }
